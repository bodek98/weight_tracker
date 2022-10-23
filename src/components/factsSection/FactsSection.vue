<template>
  <div class="facts">
    <h2 class="facts__h2">Facts</h2>
    <FactsTile title="Monthly weight"  bgColor="#fff" />
    <FactsTile title="To the goal"  bgColor="#6BDF4B" />
    <FactsTile title="BMI"  bgColor="#FF0F0F" content="2134" />
    <FactsTile title="Your weight graph" buttonSubmit />
    <FactsTile title="BMI" />
    <FactsTile title="BMI" />
  </div>
</template>

<script>
import FactsTile from "./FactsTile/FactsTile.vue";

export default {
  components: {
    FactsTile,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./FactsSection.css" scoped></style>
