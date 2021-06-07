<template>
  <div>
    <div class="columns">
      <div class="left">
        <div class="side-menu">
          <a class="section">
            <div class="back-group" v-on:click="goBack">
              <img class="icon" src="../../assets/tick.png" alt="set icon" />
              <h1 class="text">Back</h1>
            </div>
          </a>
        </div>
      </div>
      <div class="middle">
        <div class="content">
          <div class="spacer" />
          <div class="heading">
            <img class="icon" src="../../assets/set_icon.png" alt="set icon" />
            <h1 class="title">Create new set</h1>
          </div>

          <div class="property">
            <div class="name">NAME</div>
            <input
              v-model="set.name"
              class="field"
              type="text"
              placeholder="e.g. Immune System"
            />
          </div>

          <div class="property">
            <div class="name">DESCRIPTION</div>
            <input
              v-model="set.description"
              class="field"
              type="text"
              placeholder="e.g. This folder contains all sections..."
            />
          </div>

          <div class="property">
            <div class="name">FOLDER</div>

            <select class="field" v-model="set.folder">
              <option value="null">None</option>

              <option
                v-for="(item, index) in folders"
                :key="index"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="right">
        <button class="create-btn" v-on:click="createSet">Create</button>
      </div>
    </div>

    <div class="columns seperator-top-line">
      <div class="left background" />
      <div class="middle background">
        <div class="content">
          <div class="spacer" />
          <h3 class="sub-heading">
            Cards in this set ({{ set.cards.length }})
          </h3>

          <div class="card" v-for="(card, index) in set.cards" :key="index">
            <div class="top-row">
              <div class="index">{{ index + 1 }}</div>
              <div class="action-icons">
                <img
                  class="move"
                  src="../../assets/move_icon.png"
                  alt="move icon"
                />
                <img
                  class="delete"
                  src="../../assets/delete_icon.png"
                  alt="delete icon"
                  v-on:click="removeCard(index)"
                />
              </div>
            </div>

            <div class="bottom-row">
              <div class="section">
                <div class="heading">QUESTION</div>
                <textarea
                  class="body"
                  v-model="card.question"
                  placeholder="Question"
                />

                <img
                  class="upload-image"
                  src="../../assets/upload_image_icon.png"
                  alt="upload image icon"
                />
              </div>

              <div class="section">
                <div class="heading">ANSWER</div>
                <textarea
                  class="body"
                  v-model="card.answer"
                  placeholder="Answer"
                />
                <img
                  class="upload-image"
                  src="../../assets/upload_image_icon.png"
                  alt="upload image icon"
                />
              </div>
            </div>
          </div>

          <button class="add-new-card" v-on:click="addCard">+ Add Card</button>
        </div>
        <div class="spacer" />
      </div>
      <div class="right background" />
    </div>
  </div>
</template>

<script>
// import store from "../../store";
// @ is an alias to /src
import * as mutations from "../../graphql/mutations.js";
import { API, graphqlOperation } from "aws-amplify";
import store from "../../store";

export default {
  name: "CreateNewSet",
  components: {},

  async created() {},

  computed: {
    currentRoute() {
      return this.$route;
    },
  },

  mounted() {
    this.folders = store.state.folders;
    console.log(this.currentRoute.name);
  },

  data() {
    return {
      set: {
        name: "",
        description: "",
        folder: null,
        cards: [],
      },

      folders: [],
    };
  },

  methods: {
    async createSet() {
      console.log(this.set);

      if (this.set.name.length) {
        try {
          console.log("on add set");
          let res = await API.graphql(
            graphqlOperation(mutations.createSet, {
              input: {
                name: this.set.name,
                description: this.set.description,
                folderID: this.set.folder,
                userID: store.state.user.attributes.sub,
              },
            })
          );

          const setID = res.data.createSet.id;

          this.set.cards.forEach(async (card) => {
            // need to add cards as well
            let res = await API.graphql(
              graphqlOperation(mutations.createCard, {
                input: {
                  question: card.question,
                  answer: card.answer,
                  setID: setID,
                  flagged: false,
                },
              })
            );

            console.log(res);
          });

          store.dispatch("addSet", res.data.createSet);

          console.log(res);

          this.goBack();
        } catch (e) {
          console.log(e);
        }
      }
    },

    addCard() {
      this.set.cards.push({
        question: "",
        answer: "",
        flagged: "",
        setID: "",
      });
      console.log("add card");
    },

    removeCard(index) {
      console.log("remove index ", index);
      this.set.cards.splice(index, 1);
    },

    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.spacer {
  height: 50px;
  width: 100%;
}

.columns {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  .left {
    .side-menu {
      max-width: 250px;
      width: 100%;
      border-right: solid 1px #cccccc;
      height: 100%;

      .section {
        display: flex;
        justify-content: center;
        border-bottom: solid 1px #cccccc;
        padding: 30px 10px;

        .back-group {
          display: flex;
          cursor: pointer;

          .icon {
            width: 10px;
            height: 16px;
            margin: auto 0;
          }

          .text {
            color: #666666;
            font-weight: 400;
            font-size: 16px;
            margin: auto 0;
            margin-left: 20px;
          }
        }
      }
    }
  }

  .middle {
    margin: 0 auto;
    width: 100%;

    .content {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 20px;

      .heading {
        display: flex;
        margin-bottom: 50px;

        .icon {
          width: 25px;
          height: 25px;
          margin: auto 0;
        }

        .title {
          text-align: left;
          font-weight: 400;
          color: #666666;
          font-size: 22px;
          margin-left: 25px;
        }
      }

      .property {
        display: flex;
        flex-direction: column;
        width: 100%;

        margin-bottom: 50px;

        .name {
          color: #9b9b9b;
          font-weight: 400;
          font-size: 14px;
          padding: 5px 10px;
          border-bottom: solid 1px #666666;
          text-align: left;
        }

        .field {
          margin-top: 10px;
          text-align: left;
          -webkit-appearance: none;
          color: #666666;
          font-size: 16px;
          font-weight: 300;
          padding: 5px 10px;
          border: none;
        }
      }

      .sub-heading {
        color: #666666;
        font-size: 18px;
        font-weight: 500;
        max-width: 700px;

        text-align: left;
      }

      .card {
        display: flex;
        background: #ffffff;
        width: 100%;
        padding-bottom: 10px;

        margin: 20px 0;

        // min-height: 100px;

        border-radius: 5px;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 4fr;

        .top-row {
          display: flex;
          padding: 15px 20px;
          border-bottom: solid 1px #cccccc;

          .index {
            margin: auto 0;
            margin-right: auto;
            color: #666666;
            font-size: 14px;
          }

          .action-icons {
            display: flex;
            justify-content: space-between;
            min-width: 50px;
            margin: auto 0;
            margin-bottom: auto;
            margin-left: auto;

            .move {
              margin: auto 0;
              width: 18px;
              height: 5px;
              cursor: pointer;
            }

            .delete {
              margin: auto 0;
              width: 18px;
              height: 17px;
              cursor: pointer;
            }
          }
        }

        .bottom-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 15px 20px;
          grid-column-gap: 30px;

          .section {
            display: flex;
            flex-direction: column;

            .heading {
              width: 100%;
              color: #9b9b9b;
              font-weight: 500;
              padding: 5px;
              border-bottom: 1px solid #666666;
              font-size: 12px;
              margin: 0;
            }

            .body {
              color: #666666;
              font-size: 14px;
              font-weight: 300;
              padding: 5px;
              margin: auto 0;
              margin-top: 10px;
              margin-bottom: 30px;
              resize: none;
              font-family: "Roboto", sans-serif;
              border: none;
            }

            .upload-image {
              margin-left: auto;
              width: 88px;
              height: 65px;
              cursor: pointer;
            }
          }
        }
      }

      .add-new-card {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        background: #44a8bd;
        color: #ffffff;
        width: 100%;
        padding: 20px 10px;
        margin: 50px 0;
        border-radius: 5px;
        border: none;
        cursor: pointer;
      }
    }
  }

  .right {
    .create-btn {
      display: block;
      color: #ffffff;
      background-color: #a5e3af;
      padding: 10px 20px;
      border-radius: 10px;
      border: none;
      font-size: 14px;
      cursor: pointer;
      margin-right: auto;
      margin-left: auto;
      margin-top: 60px;
      min-width: 105px;
    }
  }
}

.background {
  background: #f3f3f3;
}

.seperator-top-line {
  border-top: solid 1px #cccccc;
}
</style>
