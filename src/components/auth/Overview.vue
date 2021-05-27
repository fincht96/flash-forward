<template>
  <div class="overview-section">
    <h1 class="heading">Recent folders</h1>
    <div class="cards-group">
      <div class="folder-card">
        <img
          class="icon"
          src="../../assets/folder_icon.png"
          alt="folder icon"
        />
        <div class="text-group">
          <h3 class="title">Biology Chapter 2</h3>
          <div class="details">
            10 sets <span class="spacer">|</span> Updated 30 mins ago
          </div>
        </div>
      </div>

      <div class="folder-card">
        <img
          class="icon"
          src="../../assets/folder_icon.png"
          alt="folder icon"
        />
        <div class="text-group">
          <h3 class="title">Physics Quantum Mechanics</h3>
          <div class="details">
            10 sets <span class="spacer">|</span> Updated 2 hours ago
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="overview-section">
    <h1 class="heading">Recent sets</h1>
    <div class="cards-group">
      <div class="set-card">
        <img class="icon" src="../../assets/set_icon.png" alt="set icon" />
        <div class="text-group">
          <h3 class="title">Immune system</h3>
          <div class="details">
            10 sets <span class="spacer">|</span> Updated 45 mins ago
          </div>
        </div>
      </div>

      <div class="set-card">
        <img class="icon" src="../../assets/set_icon.png" alt="set icon" />
        <div class="text-group">
          <h3 class="title">Sub-atomic particles</h3>
          <div class="details">
            67 sets <span class="spacer">|</span> Updated 6 hours ago
          </div>
        </div>
      </div>

      <div class="set-card">
        <img class="icon" src="../../assets/set_icon.png" alt="set icon" />
        <div class="text-group">
          <h3 class="title">Cell biology</h3>
          <div class="details">
            56 sets <span class="spacer">|</span> Updated 18th Jan 2020
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import store from "../../store";
// @ is an alias to /src

export default {
  name: "Overview",
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
    grid-template-columns: 1fr 1fr;
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
          cursor: pointer;

          padding: 0;
          margin: 0;
          margin-bottom: 15px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .title:hover {
          text-decoration: underline;
        }

        .details {
          color: #808080;
          font-size: 14px;
          font-weight: 400;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          .spacer {
            padding: 0 10px;
            font-weight: 400;
            color: #cccccc;
          }
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
          cursor: pointer;

          padding: 0;
          margin: 0;
          margin-bottom: 15px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .title:hover {
          text-decoration: underline;
        }

        .details {
          color: #808080;
          font-size: 14px;
          font-weight: 400;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          .spacer {
            padding: 0 10px;
            font-weight: 400;
            color: #cccccc;
          }
        }
      }
    }
  }
}
</style>
