<template>
  <div class="facts">
    <h2 class="facts__h2">Facts</h2>
    <FactsTile title="Weekly weight" bgColor="#fff" :content="weight" />
    <FactsTile
      title="Your weight history"
      buttonSubmit
      @clickedShowGraph="onClickedSG"
    />
    <FactsTile title="Actual BMI" bgColor="#FF0F0F" :content="Math.round(bmi * 10) / 10" />
  </div>
</template>

<script>
import FactsTile from "./FactsTile/FactsTile.vue";

export default {
  components: {
    FactsTile,
  },
  props: {
    msg: String,
    bmi: Number,
    weight: Number
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    onClickedSG() {
      this.$emit("onClickedShowGraph", this.isHidden);
    },
    weeklyWeight() {
      this.weights.push(this.weight);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./FactsSection.css" scoped></style>
