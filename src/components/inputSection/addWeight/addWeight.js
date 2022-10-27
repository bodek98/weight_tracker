export default {
  props: {},
  data() {
    return {
      historyData: {},
      bmi: 0,
      inputWeight: null,
      inputHeight: null,
    };
  },
  methods: {
    addData() {
      if (this.inputHeight !== "" && this.inputWeight !== "") {
        this.historyData = {
          weight: this.inputWeight,
          height: this.inputHeight,
        };
        this.bmi = this.inputWeight / Math.pow(this.inputHeight / 100, 2);
        this.$emit("bmiDataSender", this.bmi);
        this.$emit("historyDataSender", this.historyData);
        this.inputWeight = "";
        this.inputHeight = "";
      } else {
        alert("Please enter both data!");
      }
      // ADD BELOW 0
    },
  },
};
