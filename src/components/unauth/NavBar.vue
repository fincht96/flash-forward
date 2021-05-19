<template>
  <nav id="nav">
    <img src="../../assets/ff_logo.png" width="120" alt="flash forward logo" />
    <router-link class="link" to="/">Why flash-forward?</router-link>
    <router-link class="link" to="/explore">Explore</router-link>

    <div class="search">
      <i class="fa fa-search" />
      <input type="text" placeholder="Search" />
    </div>

    <router-link class="link" to="/signin">Sign in</router-link>
  </nav>
</template>

<script>
// import { Auth } from "@aws-amplify/auth";
// import { Hub } from "aws-amplify";
// import store from "../../store";

export default {
  name: "Nav",
  async created() {},

  mounted() {},

  methods: {
    // onOpenGoogleSignIn() {
    //   console.log("google sign in ");
    //   Auth.federatedSignIn({ provider: "Google" });
    // },
    // signOut() {
    //   console.log("google sign out ");
    //   Auth.signOut();
    // },
    // onAuthEvent(payload) {
    //   console.log("auth event ", payload);
    // },
  },
};
</script>

<style lang="scss">
$main-font-size: 16px;

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
