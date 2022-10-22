<template>
<WeightTracker/>
  
</template>

<script>
import WeightTracker from './components/WeightTracker/WeightTracker.vue'

export default {
  name: 'App',
  components: {
    WeightTracker
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgb(253, 253, 253);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  /* border: solid; */
}
</style>
