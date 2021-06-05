<template>
  <div>
    <div class="columns">
      <div class="left">
        <div class="side-menu">
          <a class="back-link">
            <img class="icon" src="../../assets/tick.png" alt="set icon" />
            <h1 class="text">Back</h1>
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
            <div class="name">TITLE</div>
            <input class="field" type="text" placeholder="e.g. Immune System" />
          </div>

          <div class="property">
            <div class="name">DESCRIPTION</div>
            <input
              class="field"
              type="text"
              placeholder="e.g. This folder contains all sections..."
            />
          </div>

          <div class="property">
            <div class="name">FOLDER</div>
            <input
              class="field"
              type="text"
              placeholder="e.g. Biology"
              style="color: #44a8bd"
            />
          </div>
        </div>
      </div>
      <div class="right">
        <button class="create-btn">Create</button>
      </div>
    </div>

    <div class="columns seperator-top-line">
      <div class="left background" />
      <div class="middle background">
        <div class="content">
          <div class="spacer" />
          <h3 class="sub-heading">Cards in this set (1)</h3>

          <div class="card">
            <div class="top-row">
              <div class="index">1</div>
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
                />
              </div>
            </div>

            <div class="bottom-row">
              <div class="section">
                <div class="heading">QUESTION</div>
                <div class="body">
                  Monocytes move from the systemic circulatory system into
                  general connective tissues, where they differentiate into what
                  phagocytic cell type?
                </div>
                <img
                  class="upload-image"
                  src="../../assets/upload_image_icon.png"
                  alt="upload image icon"
                />
              </div>

              <div class="section">
                <div class="heading">ANSWER</div>
                <div class="body">Macrophage</div>
                <img
                  class="upload-image"
                  src="../../assets/upload_image_icon.png"
                  alt="upload image icon"
                />
              </div>
            </div>
          </div>
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
    console.log(this.currentRoute.name);
  },

  data() {
    return {};
  },

  methods: {},
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

      .back-link {
        display: flex;
        border-bottom: solid 1px #cccccc;
        padding: 30px 10px;
        cursor: pointer;

        .icon {
          width: 10px;
          height: 16px;
          margin: auto 0;
          margin-left: 20px;
        }

        .text {
          color: #666666;
          font-weight: 400;
          font-size: 16px;
          margin: auto 0;
          margin-left: 10px;
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
            }

            .body {
              color: #666666;
              font-size: 14px;
              font-weight: 300;
              padding: 5px;
              margin: auto 0;
              margin-top: 10px;
              margin-bottom: 30px;
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
