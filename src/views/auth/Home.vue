<template>
  <div class="home">
    <div class="layout">
      <div class="profile-menu"></div>

      <div class="group-content">
        <div class="horizontal-menu">
          <div class="menu-items">
            <div class="menu-item selected">Overview</div>
            <div class="menu-item">Folders</div>
            <div class="menu-item">Sets</div>
          </div>
        </div>

        <div class="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import store from "../../store";
// @ is an alias to /src

export default {
  name: "Home",
  components: {},

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
  width: 100%;

  .layout {
    margin: 0 auto;
    max-width: 1400px;
    margin-top: 100px;
    border: solid blue 1px;
    display: grid;
    grid-template-columns: 0.3fr auto;
    column-gap: 50px;
  }
}

.profile-menu {
  width: 100%;
  min-width: 175px;
  height: 450px;
  border: solid green 1px;
}

.group-content {
  display: flex;
  flex-direction: column;
  row-gap: 75px;

  .horizontal-menu {
    margin-top: 25px;
    display: flex;

    justify-content: flex-start;
    border: solid red 1px;

    .menu-items {
      display: flex;

      justify-content: space-between;
      margin-left: 10px;

      .menu-item {
        padding: 15px 5px;
        margin-right: 20px;
        font-weight: 300;
        color: #666666;
        font-size: 16px;
        cursor: pointer;
      }

      .selected {
        box-sizing: content-box;
        font-weight: 500;
        color: #44a8bd;
        border-bottom: solid 3px #44a8bd;
      }
    }
  }

  .content {
    border: solid orange 1px;
    height: 500px;
  }
}
</style>
