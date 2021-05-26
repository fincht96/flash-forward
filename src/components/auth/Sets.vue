<template>
  <div class="overview-section">
    <div class="cards-group">
      <div class="folder-card">
        <img class="icon" src="../../assets/set_icon.png" alt="folder icon" />
        <div class="text-group">
          <h3 class="title">Immune System</h3>
          <div class="details">10 cards | Updated 2 hours ago</div>
        </div>
      </div>

      <div class="folder-card">
        <img class="icon" src="../../assets/set_icon.png" alt="folder icon" />
        <div class="text-group">
          <h3 class="title">Cell biology</h3>
          <div class="details">56 cards | Updated 18th Jan 2020</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import store from "../../store";
// @ is an alias to /src

export default {
  name: "Sets",
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

<style scoped lang="scss">
.overview-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  .heading {
    color: #666666;
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 30px;
    text-align: left;
  }

  .cards-group {
    display: grid;
    grid-template-columns: 100%;
    row-gap: 30px;
    column-gap: 20px;

    .folder-card {
      border: solid 1px #cccccc;
      padding: 20px 30px;
      border-radius: 5px;
      display: flex;

      .icon {
        height: 26px;
        height: 21px;
        margin: auto 0;
      }

      .text-group {
        display: flex;
        flex-direction: column;
        text-align: left;

        margin: auto 0;
        margin-left: 30px;

        .title {
          color: #666666;
          font-size: 16px;
          font-weight: 500;

          padding: 0;
          margin: 0;
          margin-bottom: 15px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .details {
          color: #808080;
          font-size: 14px;
          font-weight: 400;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    .set-card {
      border: solid 1px #cccccc;
      padding: 20px 30px;
      border-radius: 5px;
      display: flex;

      .icon {
        height: 22px;
        height: 22px;
        margin: auto 0;
      }

      .text-group {
        display: flex;
        flex-direction: column;
        text-align: left;

        margin: auto 0;
        margin-left: 30px;

        .title {
          color: #666666;
          font-size: 16px;
          font-weight: 500;

          padding: 0;
          margin: 0;
          margin-bottom: 15px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .details {
          color: #808080;
          font-size: 14px;
          font-weight: 400;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
