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
      this.bmiCol = "var(--blue)";
      this.bmiFontColor = "#fff";
    } else if (this.bmi >= 18.5 && this.bmi < 25) {
      this.bmiCol = "#25FF07";
      this.bmiFontColor = "inherit";
    } else if (this.bmi >= 25 && this.bmi < 30) {
      this.bmiCol = "#FFCB0E";
      this.bmiFontColor = "inherit";
    } else if (this.bmi >= 29) {
      this.bmiCol = "#FF0C00";
      this.bmiFontColor = "#FFF";
    }
  },
};
