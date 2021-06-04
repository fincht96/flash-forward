<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    Create new set!!
  </div>
</template>

<script>
// import store from "../../store";
// @ is an alias to /src

export default {
  name: "CreateNewSet",
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

<style lang="scss" scoped></style>
