<template>
  <div class="folder">
    <br /><br /><br /><br />
    hello folder

    <!-- <div class="menu-bar">

    </div> -->
  </div>
</template>

<script>
// import store from "../../store";
// @ is an alias to /src

export default {
  name: "Folder",
  components: {},

  async created() {},

  computed: {
    currentRoute() {
      return this.$route;
    },
  },

  mounted() {
    console.log(this.currentRoute.name);
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.folder {
  width: 100%;

  .layout {
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 50px;
    // border: solid blue 1px;
    display: grid;
    grid-template-columns: min-content auto;
    column-gap: 50px;
  }
}
</style>
