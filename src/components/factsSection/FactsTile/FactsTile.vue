<template>
  <div class="facts_box" :style="{ backgroundColor: bgColor, color: fColor }">
    <h3 v-if="title != null" class="facts_box__h3">{{ title }}</h3>
    <p v-if="content != null" class="facts_box__p">{{ content }}</p>
    <button v-if="buttonSubmit" class="facts_box__button" @click="showGraph">
      {{ isHiddenLoc ? "Show" : "Hide" }}
    </button>
  </div>
</template>

<script src="./FactsTile.js"></script>

<style src="./FactsTile.css" scoped></style>
