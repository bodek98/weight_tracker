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
    />
    <input
      class="input_box__input input_box__input--weight"
      type="number"
      placeholder="Enter your height (cm)"
      v-model="inputHeight"
    />
    <button @click="addData"  class="input_box__button">ADD</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
        datas: [{
            weight: 0,
            height: 0,
        }],
        inputWeight: '',
        inputHeight: '',
    };
  },
  methods: {
    addData() {
        this.datas.weight.push(this.inputWeight);
        this.datas.height.push(this.inputHeight);
        this.inputWeight = '';
        this.inputHeight = '';
    },
  }
};
</script>

<style src="./addWeight.css"></style>
