<template>
  <div class="home">
    <div class="seperator"></div>

    <div class="layout" v-if="userDetails">
      <div class="profile-menu">
        <div class="user-icon">
          {{ initials }}
        </div>

        <div class="username">{{ userDetails.username }}</div>

        <div class="bio">{{ userDetails.bio }}</div>

        <button>Edit profile</button>

        <div class="icon-text-group">
          <img
            class="icon"
            src="../../assets/location_icon.png"
            alt="location icon"
          />
          <div class="text">{{ userDetails.location }}</div>
        </div>

        <div class="icon-text-group">
          <img
            class="icon"
            src="../../assets/calendar_icon.png"
            alt="location icon"
          />
          <div class="text">
            {{ `Joined  ${formatDate(userDetails.createdAt)}` }}
          </div>
        </div>
      </div>

      <div class="group-content">
        <div class="horizontal-menu">
          <div class="menu-items">
            <div
              class="menu-item"
              v-on:click="$router.push({ name: 'Overview' })"
              v-bind:class="selectedRoute.name === 'Overview' ? 'selected' : ''"
            >
              <div class="name">Overview</div>
            </div>
            <div
              class="menu-item"
              v-on:click="$router.push({ name: 'Folders' })"
              v-bind:class="selectedRoute.name === 'Folders' ? 'selected' : ''"
            >
              <div class="name">Folders</div>
              <div class="quant">2</div>
            </div>
            <div
              class="menu-item"
              v-on:click="$router.push({ name: 'Sets' })"
              v-bind:class="selectedRoute.name === 'Sets' ? 'selected' : ''"
            >
              <div class="name">Sets</div>
              <div class="quant">3</div>
            </div>
          </div>
        </div>
        <div class="content">
          <Overview v-if="currentRoute.name === 'Overview'" />
          <Folders v-if="currentRoute.name === 'Folders'" />
          <Sets v-if="currentRoute.name === 'Sets'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import store from "../../store";
// @ is an alias to /src

import Overview from "@/components/auth/Overview.vue";
import Folders from "@/components/auth/Folders.vue";
import Sets from "@/components/auth/Sets.vue";
import store from "../../store";

export default {
  name: "Home",
  components: {
    Overview,
    Folders,
    Sets,
  },

  async created() {
    this.selectedRoute = this.currentRoute;

    this.unsubscribe = store.subscribe((mutation, state) => {
      if (state.userDetails) {
        this.userDetails = state.userDetails;
      }
    });
  },

  unmounted() {
    this.unsubscribe();
  },

  watch: {
    currentRoute: function (val) {
      this.selectedRoute = val;
    },

    userDetails: function (newDetails) {
      console.log("newDetails: ", newDetails);
      if (newDetails) {
        this.initials = `${newDetails.firstName.charAt(
          0
        )}${newDetails.lastName.charAt(0)}`;
      }
    },
  },

  computed: {
    currentRoute() {
      return this.$route;
    },
  },

  mounted() {
    console.log(this.currentRoute.name);
    console.log("home store state ", store.state.user);
    this.userDetails = store.state.userDetails;

    // console.log("home mounted, user", store.state.user);
    // console.log("home mounted, username", store.state.user.username);
  },

  data() {
    return {
      initials: "",
      selectedRoute: "Overview",
      userDetails: {},
      unsubscribe: () => {},
    };
  },

  methods: {
    nth(d) {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    },

    formatDate(date) {
      if (date) {
        const jsDateTime = new Date(date);
        const month = jsDateTime.toLocaleString("default", { month: "long" });
        let day = jsDateTime.getDate();
        return `${day}${this.nth(day)} ${month}`;
      }

      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
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
    color: #4d4d4d;
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

  button:hover {
    background-color: #e4e3e3;
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
        display: flex;
        min-height: 20px;
        box-sizing: content-box;

        .name {
          margin-right: 10px;
        }

        .quant {
          font-size: 12px;
          line-height: 20px;
          background: #f3f3f3;
          color: #666666;
          border-radius: 10px;
          max-width: 50px;
          min-width: 20px;
          padding: 0 5px;
          height: 20px;
          box-sizing: border-box;
        }
      }

      .menu-item:hover {
        border-bottom: solid 3px #cccccc;
      }

      .selected {
        box-sizing: content-box;
        font-weight: 500;
        // color: #44a8bd;
        border-bottom: solid 3px #44a8bd;
        pointer-events: none;
      }
    }
  }

  .content {
    height: 500px;
  }
}

.seperator {
  border-bottom: solid 1px #e6e6e6;
  top: 221px;
  width: 100%;
  position: absolute;
  z-index: -1;
}
</style>
