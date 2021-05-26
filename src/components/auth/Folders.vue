<template>
  <div class="folders-section">
    <!-- <div class="action-bar">
      <div class="search">
        <i class="fa fa-search" />
        <input type="text" placeholder="Search" />
      </div>

      <button>Sort</button>
      <button>New</button>
    </div> -->

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

    .search {
      margin: auto 0;
      margin-left: auto;
      display: flex;
      border: solid 1px #cccccc;
      border-radius: 8px;
      padding: 5px 5px;
      font-size: 14px;
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
