<template>
  <div class="input">
    <addWeight @bmiDataSender="bmiDataSenderSecond" @historyDataSender="historyDataSenderSecond" />
    <!-- <addCalories /> -->
  </div>
</template>

<script>
import addWeight from "./addWeight/addWeight.vue";
// import addCalories from "./addCalories/addCalories.vue";

export default {
  components: {
    addWeight,
    // addCalories,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      bmi: 0,
      historyData: []
    };
  },
  methods: {
    bmiDataSenderSecond(value) {
      this.bmi = value;
      this.$emit('getBmi', this.bmi)
    },
    historyDataSenderSecond(value) {
      this.historyData = value;
      this.$emit('getHistory', this.historyData)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./InputSection.css"></style>
