<template>
  <div class="home">
    <div class="seperator"></div>

    <div class="layout">
      <div class="profile-menu">
        <div class="user-icon">
          {{ initials }}
        </div>

        <div class="username">fincht96</div>

        <div class="bio">Part flash card maker part biology student</div>

        <button>Edit profile</button>

        <div class="icon-text-group">
          <img
            class="icon"
            src="../../assets/location_icon.png"
            alt="location icon"
          />
          <div class="text">Manchester</div>
        </div>

        <div class="icon-text-group">
          <img
            class="icon"
            src="../../assets/calendar_icon.png"
            alt="location icon"
          />
          <div class="text">Joined July 2021</div>
        </div>
      </div>

      <div class="group-content">
        <div class="horizontal-menu">
          <div class="menu-items">
            <div class="menu-item selected">Overview</div>
            <div class="menu-item">Folders</div>
            <div class="menu-item">Sets</div>
          </div>
        </div>

        <div class="content">
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
                  <div class="details">10 sets | Updated 30 mins ago</div>
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
                  <div class="details">10 sets | Updated 2 hours ago</div>
                </div>
              </div>
            </div>
          </div>

          <div class="overview-section">
            <h1 class="heading">Recent sets</h1>
            <div class="cards-group">
              <div class="set-card">
                <img
                  class="icon"
                  src="../../assets/set_icon.png"
                  alt="set icon"
                />
                <div class="text-group">
                  <h3 class="title">Immune system</h3>
                  <div class="details">10 sets | Updated 45 mins ago</div>
                </div>
              </div>

              <div class="set-card">
                <img
                  class="icon"
                  src="../../assets/set_icon.png"
                  alt="set icon"
                />
                <div class="text-group">
                  <h3 class="title">Sub-atomic particles</h3>
                  <div class="details">67 sets | Updated 6 hours ago</div>
                </div>
              </div>

              <div class="set-card">
                <img
                  class="icon"
                  src="../../assets/set_icon.png"
                  alt="set icon"
                />
                <div class="text-group">
                  <h3 class="title">Cell biology</h3>
                  <div class="details">56 sets | Updated 18th Jan 2020</div>
                </div>
              </div>
            </div>
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
  name: "Home",
  components: {},

  async created() {},

  mounted() {
    // console.log("home mounted, user", store.state.user);
    // console.log("home mounted, username", store.state.user.username);
  },

  data() {
    return {
      initials: "TF",
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;

  .layout {
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 100px;
    // border: solid blue 1px;
    display: grid;
    grid-template-columns: min-content auto;
    column-gap: 50px;
  }
}

.profile-menu {
  display: flex;
  flex-direction: column;
  width: 200px;
  min-width: 175px;
  height: min-content;
  padding-bottom: 20px;
  border-bottom: solid #cccccc 1px;
  align-items: center;

  .user-icon {
    cursor: pointer;
    height: 200px;
    width: 200px;
    background-color: #f9e7ff;
    border-radius: 50%;
    display: inline-block;
    line-height: 200px;
    color: #666666;
    font-size: 60px;
    text-align: center;
    user-select: none; /* Standard */

    margin-bottom: 20px;
  }

  .username {
    color: #666666;
    font-size: 18px;
    text-align: left;
    font-weight: 300;
    width: 100%;
    margin-bottom: 20px;
  }

  .bio {
    color: #808080;
    font-size: 16px;
    text-align: left;
    font-weight: 300;
    width: 100%;
    margin-bottom: 20px;
  }

  button {
    color: #666666;
    border: solid 1px #b0b0b0;
    background: #f3f3f3;
    border-radius: 5px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
    padding: 10px 5px;
    font-size: 14px;
    cursor: pointer;
  }

  .icon-text-group {
    display: flex;
    margin-right: auto;
    margin-bottom: 20px;

    .icon {
      width: 20px;
      height: 20px;
    }

    .text {
      margin: auto 0;
      margin-left: 10px;
      color: #808080;
      font-size: 16px;
      font-weight: 300;
    }
  }
}

.group-content {
  display: flex;
  flex-direction: column;
  row-gap: 75px;

  .horizontal-menu {
    margin-top: 25px;
    display: flex;

    justify-content: flex-start;
    // border: solid red 1px;

    .menu-items {
      display: flex;

      justify-content: space-between;
      margin-left: 10px;

      .menu-item {
        padding: 15px 5px;
        margin-right: 50px;
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
    height: 500px;

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
  }
}

.seperator {
  border-bottom: solid 1px #e6e6e6;
  top: 270px;
  width: 100%;
  position: absolute;
  z-index: -1;
}
</style>
