<template>
  <div class="home">
    <img
      class="logo-img"
      alt="flash-forward logo"
      src="../../assets/ff_logo.png"
    />

    <img
      class="logo-watermark"
      alt="flash-forward logo"
      src="../../assets/ff_logo_outline.png"
    />

    <div class="text-group">
      <h3 class="heading">What is it?</h3>
      <p class="body">
        One of the quickest ways to get started making flashcards, flash-forward
        is web app that provides a simple enviroment for creating and revising
        flash cards.
      </p>
    </div>

    <div class="text-group">
      <h3 class="heading">Why use flash-forward?</h3>
      <p class="body">
        It’s a completely free alternative to other well known flash-card apps
        with a simpler design and with the future intention to replicate many of
        the premium features from other more well known platforms.
      </p>
    </div>

    <div class="card-group">
      <h3 class="heading">Features</h3>

      <FeatureCards />
    </div>
  </div>
</template>

<script>
// import store from "../../store";
// @ is an alias to /src
import FeatureCards from "@/components/FeatureCards.vue";

export default {
  name: "Home",
  components: {
    FeatureCards,
  },

  async created() {},

  mounted() {
    // console.log("home mounted, user", store.state.user);
    // console.log("home mounted, username", store.state.user.username);
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 750px;
  margin: 100px auto;
  position: relative;
  right: 200px;
}

.logo-img {
  margin-bottom: auto;
  width: 330px;
  margin-right: auto;
  display: block;
  margin-bottom: 100px;
  // padding-bottom: 20px;
}

.logo-watermark {
  position: absolute;
  top: -50px;
  right: -400px;
  z-index: -1;
  width: 380px;
}

.text-group {
  color: #666666;
  text-align: left;
  margin-bottom: 75px;

  .heading {
    font-weight: 500;
    font-size: 24px;
  }

  .body {
    margin-top: 10px;
    font-weight: 300;
    font-size: 18px;
  }
}

.card-group {
  color: #666666;
  text-align: left;
  margin-bottom: 75px;

  .heading {
    font-weight: 500;
    font-size: 24px;
  }
}
</style>
