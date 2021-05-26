import { createRouter, createWebHistory } from "vue-router";

import HomeUnauth from "../views/unauth/Home.vue";
import HomeAuth from "../views/auth/Home.vue";

import { Auth } from "@aws-amplify/auth";

// import store from "../store";

const routes = [
  {
    path: "/",
    name: "HomeUnauth",
    component: HomeUnauth,
  },

  {
    path: "/overview",
    name: "Overview",
    component: HomeAuth,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/folders",
    name: "Folders",
    component: HomeAuth,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/sets",
    name: "Sets",
    component: HomeAuth,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/dashboard",
    name: "HomeAuth",
    component: HomeAuth,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/explore",
    name: "Explore",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/unauth/Explore.vue"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/signin",
    name: "Sign in",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/unauth/SignIn.vue"),
    meta: {
      guest: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to, from, next) => {
  console.log("before resolve");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    Auth.currentAuthenticatedUser()
      .then(() => {
        console.log("here auth");
        next();
      })
      .catch(() => {
        console.log("here");
        next({
          path: "/signin",
        });
      });
  } else {
    console.log("here 2");
    next();
  }
});

// router.beforeEach((to, from, next) => {

//   // console.log("to", to);

//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     console.log("requires auth");

//     if (store.state.user == null) {
//       next({
//         path: "/signin",
//       });
//     } else {
//       next();
//     }
//   } else {
//     console.log("requires !auth");

//     console.log(to);
//     next();
//   }
// });

export default router;
