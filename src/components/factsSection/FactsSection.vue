<template>
    <div class="container">
        <FactsTile />
    </div>
  </template>
  
  <script>
import FactsTile from "./FactsTile/FactsTile.vue";

  export default {
    components: {
    FactsTile
},
    props: {
      msg: String,
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style src="./FactsSection.css" scoped></style>
  