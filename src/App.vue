<template>
  <header class="header">
    <p class="header__p">Welcome to WeightTracker</p>
  </header>
  <InputSection />
</template>

<script>
import InputSection from "./components/InputSection.vue";

export default {
  components: {
    InputSection,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./style.css"></style>
