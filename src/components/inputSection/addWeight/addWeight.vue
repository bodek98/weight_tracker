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

<script src="./addWeight.js"></script>