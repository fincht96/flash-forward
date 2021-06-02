<template>
  <AuthNav v-if="user" />
  <UnauthNav v-else />

  <CompleteAccount v-if="showCompleteAccount" @completed="handleCompleted" />
  <router-view />
</template>

<script>
import { Auth } from "@aws-amplify/auth";
import { API, graphqlOperation } from "aws-amplify";
import { Hub } from "aws-amplify";
import AuthNav from "@/components/auth/NavBar.vue";
import UnauthNav from "@/components/unauth/NavBar.vue";
import { getUser } from "./graphql/queries.js";
import { createUser } from "./graphql/mutations.js";
import CompleteAccount from "@/components/unauth/modal/CompleteAccount.vue";

import store from "./store";

export default {
  name: "App",
  components: {
    AuthNav,
    UnauthNav,
    CompleteAccount,
  },
  async created() {
    window.addEventListener("resize", this.myEventHandler);

    try {
      let user = await Auth.currentAuthenticatedUser();
      store.dispatch("setUser", user);
    } catch (e) {
      store.dispatch("setUser", null);
    }

    Auth.currentAuthenticatedUser()
      .then(async (user) => {
        if (user) {
          console.log("user signed in ");
        } else {
          console.log("user !signed in ");
        }
        store.dispatch("setUser", user);

        let userProfile = await this.getUser(user.attributes.sub);

        console.log("userProfile", userProfile);

        if (!userProfile.data.getUser) {
          this.showCompleteAccount = true;
        }
      })
      .catch(() => console.log("Not signed in"));
  },

  unmounted() {
    window.removeEventListener("resize", this.myEventHandler);
  },

  mounted() {
    Hub.listen("auth", (data) => {
      const { payload } = data;
      this.onAuthEvent(payload);

      switch (payload.event) {
        case "signIn":
          store.dispatch("setUser", payload.data);
          break;
        case "signOut":
          store.dispatch("setUser", null);
          break;
        case "customOAuthState":
          this.customState = payload.data;
          break;

        default:
          break;
      }
    });
  },

  data() {
    return {
      name: "",
      description: "",
      todos: [],
      customState: null,
      isReady: false,
      showCompleteAccount: false,
      windowWidth: window.innerWidth,
    };
  },

  computed: {
    // a computed getter
    user: function () {
      return store.state.user;
    },
  },

  methods: {
    async handleCompleted(userDetails) {
      console.log("userDetails: ", userDetails);

      try {
        // let res = await this.createNewUser({
        //   firstName: "Tom",
        //   lastName: "Finch",
        //   bio: "Just a software engineer",
        //   location: "Macclesfield",
        //   username: "fincht96",
        //   id: user.attributes.sub,
        // });

        let res = await this.createNewUser({
          ...userDetails,
          ...{ id: this.user.attributes.sub },
        });

        console.log("res ", res);

        this.showCompleteAccount = false;
      } catch (e) {
        console.log("error creating user");
        console.log(e);
      }
    },

    myEventHandler() {
      this.windowWidth = window.innerWidth;
      console.log("windowWidth: ", this.windowWidth);
    },

    onAuthEvent(payload) {
      console.log("auth event ", payload);
    },

    async getUser(id) {
      const user = await API.graphql({
        query: getUser,
        variables: { id: id },
      });

      return user;
    },

    async createNewUser(user) {
      let res = await API.graphql(
        graphqlOperation(createUser, { input: user })
      );

      // await API.graphql({
      //   query: createUser,
      //   variables: {
      //     input: userDetails,
      //   },
      // });

      return res;
    },
  },
};
</script>

<style lang="scss">
$main-font-size: 16px;

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

body {
  margin: 0;
  padding: 0;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

#nav {
  display: flex;
  padding: 20px 20px;
  border-bottom: solid 1px #e6e6e6;

  img {
    margin-bottom: auto;
    display: block;
    padding-bottom: 20px;
  }

  .link {
    margin: auto 0;
    margin-left: 50px;
    text-decoration: none;
    color: #666666;
    font-weight: 300;

    &.router-link-exact-active {
      font-weight: 500;
    }

    &:hover {
      font-weight: 500;
    }
  }

  // .link:hover {
  //   ;
  // }

  .search {
    margin: auto 0;
    margin-left: auto;
    display: flex;
    border: solid 1px #cccccc;
    border-radius: 8px;
    padding: 5px 5px;
    font-size: $main-font-size;
    color: #666666;

    input {
      border: none;
      padding: 5px;
    }

    i {
      border: none;
      padding: 5px;
    }

    *,
    *:focus,
    *:hover {
      outline: none;
    }

    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      font-size: $main-font-size;
      color: #666666;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      font-size: $main-font-size;
      color: #666666;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      font-size: $main-font-size;
      color: #666666;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      font-size: $main-font-size;
      color: #666666;
    }
  }
}
</style>
