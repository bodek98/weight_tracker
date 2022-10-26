<template>
  <div class="input">
    <addWeight @bmiDataSender="bmiDataSenderSecond" @historyDataSender="historyDataSenderSecond" />
    <!-- <addCalories /> -->
  </div>
</template>

<script src="./InputSection.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./InputSection.css"></style>
