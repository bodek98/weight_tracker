<template>
    <header class="header">
      <p class="header__p">Welcome to WeightTracker</p>
    </header>
    <div class="container">
      <addWeight />
      <addCalories />
    </div>
  </template>
  
  <script>
  import addWeight from './inputSection/addWeight/addWeight.vue';
  import addCalories from './inputSection/addCalories/addCalories.vue';
  
  export default {
      components: {
        addWeight,
        addCalories
      },
      props: {
        msg: String
      }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style src="./inputSection/style.css"></style>
  