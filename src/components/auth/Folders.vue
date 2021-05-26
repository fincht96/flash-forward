<template>
  <div class="folders-section">
    <div class="action-bar">
      <div class="search">
        <i class="fa fa-search" />
        <input type="text" placeholder="Find a folder..." />
      </div>

      <button class="sort-btn">
        <div class="text">Sort</div>
        <img class="icon" src="../../assets/sort_icon.png" alt="sort icon" />
      </button>
      <button class="new-btn">New +</button>
    </div>

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
            10 sets
            <span class="spacer">|</span>
            Updated 30 mins ago
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
</template>

<script>
// import store from "../../store";
// @ is an alias to /src

export default {
  name: "Folders",
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
.folders-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  .action-bar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 50px;

    .search {
      width: 100%;
      //   max-width: 550px;
      margin: auto 0;
      display: flex;
      border: solid 1px #cccccc;
      border-radius: 8px;
      padding: 5px 5px;
      font-size: 14px;
      color: #666666;
      margin-right: 20px;

      input {
        border: none;
        padding: 5px;
        width: 100%;
        color: #666666;
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
        font-size: 14px;
        color: #666666;
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        font-size: 14px;
        color: #666666;
      }
      :-ms-input-placeholder {
        /* IE 10+ */
        font-size: 14px;
        color: #666666;
      }
      :-moz-placeholder {
        /* Firefox 18- */
        font-size: 14px;
        color: #666666;
      }
    }

    .sort-btn {
      margin-left: auto;
      display: flex;
      width: 90px;
      //   margin-left: 20px;
      align-items: center;
      justify-content: center;

      border: solid 1px #b0b0b0;
      background: #f3f3f3;
      border-radius: 5px;

      padding: 10px 5px;

      cursor: pointer;

      .text {
        color: #4d4d4d;
        text-align: left;
        font-size: 14px;
      }

      .icon {
        margin: auto 0;
        margin-left: 10px;
        width: 13px;
        height: 9px;
      }
    }

    .new-btn {
      margin-left: 20px;
      width: 90px;
      font-weight: 400;

      color: #ffffff;
      border: solid 1px #44a8bd;
      background: #44a8bd;
      border-radius: 5px;

      text-align: center;

      padding: 10px 5px;
      font-size: 14px;
      cursor: pointer;
    }
  }

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

    column-gap: 20px;

    border-bottom: solid 1px #cccccc;

    .folder-card {
      border-top: solid 1px #cccccc;
      padding: 50px 30px;

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
