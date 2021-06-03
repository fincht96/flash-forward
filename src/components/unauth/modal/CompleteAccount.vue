<template>
  <div id="myModal" class="modal" v-on:click="onClose">
    <div class="modal-content" v-on:click.stop>
      <div class="heading">
        <div class="title">
          <h3>Complete account creation</h3>
        </div>
      </div>

      <div class="entry">
        <div class="field-name">Username</div>
        <input
          v-model="userDetails.username"
          class="field-input-large"
          type="text"
        />
      </div>

      <div class="entry">
        <div>
          <div class="field-name">First name</div>
          <input
            v-model="userDetails.firstName"
            class="field-input-small"
            type="text"
          />
        </div>

        <div>
          <div class="field-name">Last name</div>
          <input
            v-model="userDetails.lastName"
            class="field-input-small"
            type="text"
          />
        </div>
      </div>

      <div class="entry">
        <div class="field-name">Bio</div>
        <textarea
          v-model="userDetails.bio"
          class="field-input-extra-large"
          type="text"
        />
      </div>

      <div class="entry">
        <div class="field-name">Location</div>
        <input
          v-model="userDetails.location"
          class="field-input-large"
          type="text"
        />
      </div>

      <button
        v-on:click="onComplete"
        v-bind:class="{ disabled: !userDetails.username.length }"
      >
        Complete
      </button>
    </div>
  </div>
</template>

<script>
// import store from "../../store";
// @ is an alias to /src

export default {
  name: "CompleteAccount",

  components: {},

  async created() {
    console.log("created complete account modal");
  },

  mounted() {
    // console.log("home mounted, user", store.state.user);
    // console.log("home mounted, username", store.state.user.username);
  },

  data() {
    return {
      userDetails: {
        username: "",
        firstName: "",
        lastName: "",
        bio: "",
        location: "",
      },
    };
  },

  methods: {
    onComplete() {
      // USE REGEX TO FIND INVALID CHARACTERS
      if (this.userDetails.username.length) {
        console.log("on add folder");
        this.$emit("completed", this.userDetails);
      }
    },
  },
};
</script>

<style scoped lang="scss">
/* The Modal (background) */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 50px 40px;

  width: 80%;
  max-width: 600px;

  .heading {
    display: flex;
    margin-bottom: 50px;

    .title {
      display: flex;
      margin: auto 0;

      h3 {
        margin: auto 0;
        color: #666666;
        font-size: 24px;
        font-weight: 400;
      }
    }

    .circle-with-text {
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      width: 18px;
      height: 18px;
      text-align: center;
      display: flex;
      color: #666666;
      background: #ffffff;
      border: solid 1px #cccccc;
      padding: 15px;
      font-size: 18px;
      margin: auto 0;
      margin-left: auto;
      cursor: pointer;
    }

    .circle-with-text:hover {
      background: #cccccc;
      color: #ffffff;
    }

    .close-icon {
      margin-left: auto;
      width: 38px;
      height: 38px;
    }
  }

  .entry {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 30px;
    column-gap: 50px;

    .field-name {
      color: #666666;
      font-size: 16px;
      padding-bottom: 10px;
      font-weight: 500;
      text-align: left;
      grid-column: 1/3;
    }

    .field-input-extra-large {
      border: solid 1px #cccccc;
      border-radius: 5px;
      color: #808080;
      font-weight: 300;
      padding: 10px;
      font-size: 16px;
      outline: none;
      grid-column: 1/3;
      width: 100%;
      box-sizing: border-box;
      height: 100px;
      resize: none;
    }

    .field-input-large {
      border: solid 1px #cccccc;
      border-radius: 5px;
      color: #808080;
      font-weight: 300;
      padding: 10px;
      font-size: 16px;
      outline: none;
      grid-column: 1/3;
      width: 100%;
      box-sizing: border-box;
    }

    .field-input-small {
      border: solid 1px #cccccc;
      border-radius: 5px;
      color: #808080;
      font-weight: 300;
      padding: 10px;
      font-size: 16px;
      outline: none;
      width: 100%;
      box-sizing: border-box;
    }
  }

  button {
    margin-top: 50px;
    border: none;
    background-color: #a5e3af;
    color: white;
    padding: 25px;
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
  }

  .disabled {
    background-color: #cccccc;
    cursor: default;
  }
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
