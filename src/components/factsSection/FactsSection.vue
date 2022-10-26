<template>
  <div class="facts">
    <h2 class="facts__h2">Facts</h2>
    <FactsTile title="Weekly weight" :content="weight" />
    <FactsTile
      title="Your weight history"
      buttonSubmit
      @clickedShowGraph="onClickedSG"
    />
    <FactsTile
      title="Actual BMI"
      :bgColor="bmiCol"
      :fColor="bmiFontColor"
      :content="Math.round(bmi * 10) / 10"
    />
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
    weight: Number,
  },
  data() {
    return {
      bmiCol: "",
      bmiFontColor: "",
    };
  },
  computed: {},
  methods: {
    onClickedSG() {
      this.$emit("onClickedShowGraph", this.isHidden);
    },
    weeklyWeight() {
      this.weights.push(this.weight);
    },
  },
  updated() {
    // this.bmiFontColor = "inherit";
    if (this.bmi < 18.5) {
      this.bmiCol = "#0E83FF";
      this.bmiFontColor = '#fff';
    } else if (this.bmi >= 18.5 && this.bmi < 25) {
      this.bmiCol = "#25FF07";
      this.bmiFontColor = 'inherit';
    } else if (this.bmi >= 25 && this.bmi < 30) {
      this.bmiCol = "#FFCB0E";
      this.bmiFontColor = 'inherit'
    } else if (this.bmi >= 29) {
      this.bmiCol = "#FF0C00";
      this.bmiFontColor = "#85FFFF";
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./FactsSection.css" scoped></style>
