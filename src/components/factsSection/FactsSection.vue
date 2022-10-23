<template>
  <div class="facts">
    <h2 class="facts__h2">Facts</h2>
    <FactsTile title="Monthly weight"  bgColor="#fff" />
    <FactsTile title="Your weight graph" buttonSubmit @clickedShowGraph="onClickedSG" />
    <FactsTile title="BMI"  bgColor="#FF0F0F" content="wleo" />
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
  },
  methods: {
    onClickedSG() {
      this.$emit('onClickedShowGraph', this.isHidden);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./FactsSection.css" scoped></style>
