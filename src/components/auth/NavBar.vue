<template>
  <nav id="nav">
    <router-link to="/"
      ><img src="../../assets/ff_logo.png" width="120" alt="flash forward logo"
    /></router-link>
    <router-link class="link" to="/explore">Explore</router-link>
    <router-link class="link" to="/activity">Activity</router-link>

    <div class="search">
      <i class="fa fa-search" />
      <input type="text" placeholder="Search" />
    </div>

    <div class="dropdown">
      <div
        class="user-icon"
        v-bind:class="{ active: showDropdown === true }"
        v-on:click.self.stop="showDropdown = !showDropdown"
      >
        {{ initials }}
      </div>

      <div
        id="myDropdown"
        class="dropdown-content"
        v-if="showDropdown"
        v-on:click.stop="
          {
          }
        "
      >
        <div class="item seperator-bottom">Signed in as <b>fincht96</b></div>
        <a class="item" href=".">Your folders</a>
        <a class="item" href=".">Your sets</a>
        <a class="item" href=".">Settings</a>
        <a class="item seperator-top" href=".">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
// import { Auth } from "@aws-amplify/auth";
// import { Hub } from "aws-amplify";
// import store from "../../store";

export default {
  name: "Nav",
  async created() {},

  mounted() {
    window.addEventListener("click", () => {
      this.showDropdown = false;
    });
  },

  unmounted() {
    window.removeEventListener("click");
  },

  data() {
    return {
      initials: "TF",
      showDropdown: false,
    };
  },

  methods: {
    handler(event) {
      console.log(
        "Clicked outside (Using config), middleware returned true :)",
        event
      );
    },
  },
};
</script>

<style lang="scss">
$main-font-size: 16px;

#nav {
  display: flex;
  padding: 20px 20px;
  border-bottom: solid 1px #e6e6e6;

  img {
    margin-bottom: auto;
    display: block;
    padding-bottom: 20px;
  }

  .link {
    margin: auto 0;
    margin-left: 50px;
    text-decoration: none;
    color: #666666;
    font-weight: 300;

    &.router-link-exact-active {
      font-weight: 500;
    }

    &:hover {
      font-weight: 500;
    }
  }

  // .link:hover {
  //   ;
  // }

  .search {
    margin: auto 0;
    margin-left: auto;
    display: flex;
    border: solid 1px #cccccc;
    border-radius: 8px;
    padding: 5px 5px;
    font-size: $main-font-size;
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
      font-size: $main-font-size;
      color: #666666;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      font-size: $main-font-size;
      color: #666666;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      font-size: $main-font-size;
      color: #666666;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      font-size: $main-font-size;
      color: #666666;
    }
  }

  .dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    position: relative;

    .user-icon {
      cursor: pointer;
      height: 40px;
      width: 40px;
      background-color: #F9E7FF;
      border-radius: 50%;
      display: inline-block;
      line-height: 40px;
      text-align: center;
      user-select: none; /* Standard */
    }

    .active {
      background-color: #c99ed8;
    }

    .user-icon:hover {
      background-color: #c99ed8;
    }

    .dropdown-content {
      top: 50px;
      margin-top: 10px;
      padding: 0;
      position: absolute;
      background-color: #ffffff;
      border: solid 1px #e6e6e6;
      min-width: 160px;
      overflow: auto;
      right: 0;
      z-index: 1;
      border-radius: 8px;
      animation: fadeIn ease 0.05s;
      user-select: none; /* Standard */

      .item {
        text-align: left;
        text-decoration: none;
        font-size: 14px;
        color: #666666;
        display: block;

        overflow-x: hidden; /* Disable horizontal scroll */
        white-space: pre;

        cursor: pointer;
        padding: 12px 30px;
        z-index: 2; /* Sit on top */
      }

      .seperator-top {
        border-top: solid 1px #e6e6e6;
      }

      .seperator-bottom {
        border-bottom: solid 1px #e6e6e6;
      }

      a:hover {
        background: #44a8bd;
        color: #ffffff;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    // .dropdown-content a {
    //   text-align: left;
    //   text-decoration: none;
    //   font-size: 14px;
    //   color: #666666;
    //   display: block;

    //   overflow-x: hidden; /* Disable horizontal scroll */
    //   white-space: pre;

    //   cursor: pointer;
    //   padding: 10px 30px;
    //   z-index: 2; /* Sit on top */
    // }
  }
}
</style>
