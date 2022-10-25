<template>
  <div class="input_box">
    <h3 class="input_box__h3">Add Data</h3>
    <p class="input_box__p">Enter your weight</p>
    <input
      class="input_box__input input_box__input--weight"
      type="number"
      step="0.1"
      placeholder="Enter your weight (kg)"
      v-model="inputWeight"
      @keydown.enter="addData"
    />
    <input
      class="input_box__input input_box__input--weight"
      type="number"
      placeholder="Enter your height (cm)"
      v-model="inputHeight"
      @keydown.enter="addData"
    />
    <button @click="addData" class="input_box__button">ADD</button>
  </div>
</template>

<script>
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
        console.log(this.historyData);
        this.inputWeight = "";
        this.inputHeight = "";
      } else {
        alert("Please enter both data!");
      }
      // ADD BELOW 0
    },
  },
};
</script>

<style src="./addWeight.css"></style>
