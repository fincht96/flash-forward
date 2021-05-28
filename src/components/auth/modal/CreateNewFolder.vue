<template>
  <div id="myModal" class="modal" v-on:click="onClose">
    <div class="modal-content" v-on:click.stop>
      <div class="heading">
        <div class="title">
          <img
            class="folder-icon"
            src="../../../assets/folder_icon.png"
            alt="folder icon"
          />
          <h3>Create new folder</h3>
        </div>
        <div v-on:click="onClose" class="circle-with-text">&#10006;</div>
      </div>

      <br />
      <br />

      <div class="entry">
        <div class="field-name">NAME</div>
        <input
          v-model="name"
          class="field-input"
          type="text"
          placeholder="e.g. Chemistry"
        />
      </div>

      <div class="entry">
        <div class="field-name">DESCRIPTION</div>
        <input
          v-model="description"
          class="field-input"
          type="text"
          placeholder="e.g. This folder contains revision material for all...."
        />
      </div>

      <div class="entry">
        <div class="field-name">TAGS</div>
        <input
          v-model="tags"
          class="field-input"
          type="text"
          placeholder="e.g. #chemistry #exam-revision"
        />
      </div>

      <br />

      <button v-on:click="onAddFolder" v-bind:class="{ disabled: !name.length }">Done</button>
    </div>
  </div>
</template>

<script>
// import store from "../../store";
// @ is an alias to /src

export default {
  name: "CreateNewFolder",

  props: {
    onClose: Function,
  },

  components: {},

  async created() {},

  mounted() {
    // console.log("home mounted, user", store.state.user);
    // console.log("home mounted, username", store.state.user.username);
  },

  data() {
    return {
      name: "",
      tags: "",
      description: "",
    };
  },

  methods: {
    onAddFolder() {
      // USE REGEX TO FIND INVALID CHARACTERS
      if (this.name.length) {
        console.log("on add folder");
      }
    },

    // onClose() {
    //   console.log("on close");
    // },
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
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
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

    .title {
      display: flex;
      margin: auto 0;

      h3 {
        margin: auto 0;
        margin-left: 20px;
        color: #666666;
        font-size: 22px;
        font-weight: 400;
      }

      .folder-icon {
        width: 28px;
        height: 22px;
        margin: auto 0;
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
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;

    .field-name {
      color: #9b9b9b;
      font-size: 14px;
      padding-left: 10px;
      padding-bottom: 5px;
      border-bottom: solid 1px #666666;
      font-weight: 500;
      text-align: left;
    }

    .field-input {
      border: none;
      color: #666666;
      font-weight: 200;
      padding: 10px 0;
      padding-left: 10px;
      font-size: 16px;
      outline: none;
    }

    .field-input:focus {
      //   background: #f3f3f3;

      outline: none;
    }
  }

  button {
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
