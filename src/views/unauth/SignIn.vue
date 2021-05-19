<template>
  <div class="signin">
    <img class="ff-logo" alt="flash-forward logo" src="../../assets/ff_logo.png" />
    <h1 class="heading">Sign in to flash-forward</h1>

    <!-- <button class="sign-in-btn">
      <img src="../assets/btn_google_icon.png" alt="google sign in button" />
      <div>Sign in with Google</div>
    </button> -->

    <img
      v-on:click="onGoogleSignIn()"
      class="google-icon"
      src="../../assets/google_sign_in_btn_light.png"
      alt="google sign in button"
    />

    <p class="privacy-msg">
      Sign in to save your progress. Don’t worry nothing is shared on any social
      media.
    </p>
  </div>
</template>

<script>
import { Auth } from "@aws-amplify/auth";


export default {
  name: "App",
  async created() {},

  mounted() {
    console.log("mounted sign in");

    // Hub.listen("auth", (data) => {
    //   const { payload } = data;
    //   this.onAuthEvent(payload);

    //   console.log(payload);

    //   switch (payload.event) {
    //     case "signIn":
    //       this.user = payload.data;
    //       break;
    //     case "signOut":
    //       this.user = null;
    //       break;
    //     case "customOAuthState":
    //       this.customState = payload.data;
    //       break;

    //     default:
    //       break;
    //   }
    // });

    // Auth.currentAuthenticatedUser()
    //   .then((user) => {
    //     console.log("user signed in ", user);
    //     this.user = user;
    //   })
    //   .catch(() => console.log("Not signed in"));
  },

  data() {
    return {};
  },

  methods: {
    onGoogleSignIn() {
      console.log("google sign in ");
      Auth.federatedSignIn({ provider: "Google" });
    },
  },
};
</script>

<style lang="scss" scoped>
.ff-logo {
  width: 120px;
  margin-top: 100px;
  margin-bottom: 25px;
}

.heading {
  font-size: 24px;
  color: #666666;
  font-weight: 400;
  margin-bottom: 100px;
}

.google-icon {
  width: 300px;
  cursor: pointer;
  margin-bottom: 20px;
}

.privacy-msg {
  margin: 0 auto;
  color: #808080;
  font-size: 14px;
  width: 300px;
  text-align: left;
}
</style>
