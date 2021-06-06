<template>
  <div class="folders-section">
    <div class="action-bar">
      <div class="search">
        <i class="fa fa-search" />
        <input type="text" placeholder="Find a set..." />
      </div>

      <button class="sort-btn">
        <div class="text">Sort</div>
        <img class="icon" src="../../assets/sort_icon.png" alt="sort icon" />
      </button>
      <button class="new-btn" v-on:click="createSet">New +</button>
    </div>

    <div class="cards-group">
      <div class="set-card" v-for="set in sets" :key="set.id">
        <img class="icon" src="../../assets/set_icon.png" alt="set icon" />
        <div class="text-group">
          <h3 class="title">{{ set.name }}</h3>
          <div class="details">
            <!-- {{ sets.cards.length ? set.cards.length : 0 }} cards -->
            <span class="spacer">|</span>
            {{ formatLastUpdated(set.updatedAt) }}
          </div>
        </div>
      </div>

      <!-- <div class="set-card">
        <img class="icon" src="../../assets/set_icon.png" alt="folder icon" />
        <div class="text-group">
          <h3 class="title">Immune system</h3>
          <div class="details">
            10 cards
            <span class="spacer">|</span>
            Updated 2 hours ago
          </div>
        </div>
      </div>

      <div class="set-card">
        <img class="icon" src="../../assets/set_icon.png" alt="folder icon" />
        <div class="text-group">
          <h3 class="title">Cell biology</h3>
          <div class="details">
            56 cards <span class="spacer">|</span> Updated 18th Jan 2020
          </div>
        </div>
      </div>

      <div class="set-card">
        <img class="icon" src="../../assets/set_icon.png" alt="folder icon" />
        <div class="text-group">
          <h3 class="title">Infection and response</h3>
          <div class="details">
            78 cards <span class="spacer">|</span> Updated 23rd Mar 2020
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import store from "../../store";
// import store from "../../store";
// @ is an alias to /src

export default {
  name: "Sets",
  components: {},

  async created() {
    this.unsubscribe = store.subscribe((mutation, state) => {
      console.log("sets state", state.sets);
      this.sets = state.sets;
    });
  },

  mounted() {
    this.sets = store.state.sets;

    console.log("sets in Sets", this.sets);

    // console.log("home mounted, user", store.state.user);
    // console.log("home mounted, username", store.state.user.username);
  },

  data() {
    return {
      sets: [],
    };
  },

  methods: {
    createSet() {
      this.$router.push("/sets/create");
    },

    formatDate(date) {
      let formattedDate = new Date(date);
      let day = formattedDate.getDate();
      let month = formattedDate.getMonth() + 1;
      let year = formattedDate.getFullYear() - 2000;

      if (day < 10) {
        day = `0${day}`;
      }

      if (month < 10) {
        month = `0${month}`;
      }

      return `${day}/${month}/${year}`;
    },

    formatLastUpdated(dateUpdated) {
      const jsDateTime = new Date(dateUpdated);
      const timeElapsedMs = Date.now() - jsDateTime.getTime();

      const timeElapsedSecs = timeElapsedMs / 1000;
      const timeElapsedMins = timeElapsedSecs / 60;
      const timeElapsedHours = timeElapsedMins / 60;
      const timeElapsedDays = timeElapsedHours / 24;

      if (timeElapsedSecs < 60) {
        let units = timeElapsedSecs < 2 ? "second" : "seconds";
        return `Updated ${Math.trunc(timeElapsedSecs)} ${units} ago`;
      }

      if (timeElapsedMins < 60) {
        let units = timeElapsedMins < 2 ? "minute" : "minutes";
        return `Updated ${Math.trunc(timeElapsedMins)} ${units} ago`;
      }

      if (timeElapsedHours < 24) {
        let units = timeElapsedHours < 2 ? "hour" : "hours";
        return `Updated ${Math.trunc(timeElapsedHours)} ${units} ago`;
      }

      if (timeElapsedDays < 30) {
        let units = timeElapsedDays < 2 ? "day" : "days";
        return `Updated ${Math.trunc(timeElapsedDays)} ${units} ago`;
      }

      return `Updated ${this.formatDate(jsDateTime)}`;
    },
  },
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

    .sort-btn:hover {
      background-color: #e4e3e3;
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

    .new-btn:hover {
      background-color: #398c9c;
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

    .set-card {
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
