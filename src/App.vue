<template>
  <header class="header">
    <h2 class="header__p">WeightTracker</h2>
  </header>
  <InputSection @getBmi="pushBmi" @getHistory="pushHistory" />
  <FactsSection
    @onClickedShowGraph="showGraph"
    :bmi="bmiLocal"
    :weight="historyLocal.weight"
  />
  <Transition>
    <GraphSection v-show="isHidden" :history="historyLocal" :bmi="bmiLocal" />
  </Transition>
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
      isHidden: false,
      bmiLocal: 0,
      historyLocal: {},
    };
  },
  methods: {
    showGraph() {
      this.isHidden = !this.isHidden;
    },
    pushBmi(value) {
      this.bmiLocal = value;
    },
    pushHistory(value) {
      this.historyLocal = value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./App.css"></style>
