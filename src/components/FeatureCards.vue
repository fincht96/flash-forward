<template>
  <div class="card-collection">
    <div class="card">
      <img
        class="icon"
        src="../assets/edit_feature_icon.png"
        alt="edit feature icon"
      />

      <h3 class="title">Create</h3>
      <p class="body">
        Make folders, set and cards to organise all your subjects and topics
      </p>
    </div>

    <div class="card">
      <img
        class="icon"
        src="../assets/revise_feature_icon.png"
        alt="revise feature icon"
      />

      <h3 class="title">Revise</h3>
      <p class="body">
        Using spaced repetition this mode can increase your rate of learning
      </p>
    </div>

    <div class="card">
      <img
        class="icon"
        src="../assets/test_feature_icon.png"
        alt="test feature icon"
      />

      <h3 class="title">Test</h3>
      <p class="body">
        A quick method for seeing how well you really know your cards
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureCards",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-collection {
  display: flex;
  justify-content: space-between;

  .card {
    display: flex;
    border: solid 1px #cccccc;
    width: 200px;
    flex-direction: column;
    color: #666666;
    padding: 20px 10px;
    border-radius: 10px;

    .icon {
      width: 67px;
      height: 67px;
      margin: 10px auto;
    }

    .title {
      text-align: center;
      font-weight: 500;
      font-size: 24px;
      margin-bottom: 10px;
    }

    .body {
      margin: 0 auto;
      margin-top: 0;
      text-align: center;
      font-weight: 300;
      font-size: 14px;
      max-width: 180px;
    }
  }
}
</style>
