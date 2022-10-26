<template>
  <div class="graph">
    <h2 class="graph__h2">Weight history</h2>
    <ul class="graph__ul">
      <li class="graph__li" v-for="data in historyData" :key="data">
        {{ data.weight }} kg
      </li>
    </ul>
  </div>
</template>

<script src="./GraphSection.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./GraphSection.css" scoped></style>
