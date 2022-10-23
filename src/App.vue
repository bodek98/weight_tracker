<template>
  <header class="header">
    <p class="header__p">Welcome to WeightTracker</p>
  </header>
  <InputSection />
  <FactsSection />
</template>

<script>
import InputSection from "./components/inputSection/InputSection.vue";
import FactsSection from "./components/factsSection/FactsSection.vue";

export default {
  components: {
    InputSection,
    FactsSection
},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./App.css"></style>
