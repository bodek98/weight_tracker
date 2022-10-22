<template>
  <header class="header">
    <p class="header__p">Welcome to WeightTracker</p>
  </header>
  <div class="container">
    <addWeight></addWeight>
    <addCalories></addCalories>
  </div>
</template>

<script>
import addWeight from 'c:/Users/PC/Documents/Programy poza studiami/VUE Projects/weighttracker_vue/weight_tracker/src/components/addWeight/addWeight.vue';
import addCalories from 'c:/Users/PC/Documents/Programy poza studiami/VUE Projects/weighttracker_vue/weight_tracker/src/components/addCalories/addCalories.vue';

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
<style src="./style.css" scoped></style>
