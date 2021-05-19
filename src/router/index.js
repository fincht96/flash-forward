import { createRouter, createWebHistory } from "vue-router";

import HomeUnauth from "../views/unauth/Home.vue";
import HomeAuth from "../views/auth/Home.vue";

import store from "../store";

const routes = [
  {
    path: "/",
    name: "HomeUnauth",
    component: HomeUnauth,
    beforeEnter: (to, from, next) => {
      if (store.state.user) {
        // next({ name: "UserRoot", params: { id: 3 } });
        next({ name: "HomeAuth" });
      } else {
        next();
      }
    },
  },

  {
    path: "/",
    name: "HomeAuth",
    component: HomeAuth,
    beforeEnter: (to, from, next) => {
      if (!store.state.user) {
        // next({ name: "UserRoot", params: { id: 3 } });
        next({ name: "HomeUnauth" });
      } else {
        next();
      }
    },
  },

  // { path: "/", name: "HomeAuth", component: User },

  {
    path: "/explore",
    name: "Explore",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/unauth/Explore.vue"),
  },

  {
    path: "/signin",
    name: "Sign in",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/unauth/SignIn.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
