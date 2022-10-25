<template>
    <div class="graph">
      <h2 class="graph__h2">Weight history</h2>
      <ul  class="graph__ul">
        <li class="graph__li" v-for="data in historyData" :key="data">
          <!-- :class="{'graph__li--light': data.weight < 60, 'graph__li--medium': data.weight >= 60 && data.weight < 100, 'graph__li--hard': data.weight >= 100}" -->
          {{data.weight}} kg
        </li>
      </ul>

    </div>
  </template>
  
  <script>
  
  export default {
    components: {
    },
    props: {
      msg: String,
      history: Object
    },
    data() {
      return {
        historyData: [],
        // light: false,
        // medium: false,
        // hard: false
      }
    },
    watch: {
      history(newHistory) {
        this.historyData.push(newHistory);
      }
    },

  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style src="./GraphSection.css" scoped></style>
  