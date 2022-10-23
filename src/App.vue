<template>
  <header class="header">
    <p class="header__p">Welcome to WeightTracker</p>
  </header>
  <InputSection />
  <GraphSection v-if="isHidden"/>
  <FactsSection  @onClickedShowGraph="showGraph" />
</template>

<script>
import InputSection from "./components/inputSection/InputSection.vue";
import FactsSection from "./components/factsSection/FactsSection.vue";
import GraphSection from "./components/graphSection/GraphSection.vue";

export default {
  components: {
    InputSection,
    FactsSection,
    GraphSection,
},
  props: {
    msg: String,
  },
  data() {
    return {
      isHidden: false
    }
  },
  methods: {
    showGraph() {
      this.isHidden = !this.isHidden;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./App.css"></style>
