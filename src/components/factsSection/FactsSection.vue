<template>
  <div class="facts">
    <h2 class="facts__h2">Facts</h2>
    <FactsTile title="Current weight (kg)" :content="weight" />
    <FactsTile
      title="Current BMI"
      :bgColor="bmiCol"
      :fColor="bmiFontColor"
      :content="Math.round(bmi * 10) / 10"
    />
    <FactsTile
      title="Your weight history"
      buttonSubmit
      @clickedShowGraph="onClickedSG"
    />
  </div>
</template>

<script src="./FactsSection.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./FactsSection.css" scoped></style>
