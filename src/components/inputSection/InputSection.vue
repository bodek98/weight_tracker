<template>
  <div class="input">
    <addWeight />
    <addCalories />
  </div>
</template>

<script>
import addWeight from "./addWeight/addWeight.vue";
import addCalories from "./addCalories/addCalories.vue";

export default {
  components: {
    addWeight,
    addCalories,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./InputSection.css" ></style>
