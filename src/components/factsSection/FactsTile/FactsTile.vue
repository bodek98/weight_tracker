<template>
    <div class="facts_box" :style="{backgroundColor: bgColor, color: fColor}">
        <h3 v-if="title != null" class="facts_box__h3">{{title}}</h3>
        <p v-if="content != null" class="facts_box__p">{{content}}</p>
        <button class="facts_box__button" v-if="buttonSubmit === true" @click="showGraph">Show</button>
    </div>
</template>

<script>

export default {
  props: {
    title: String,
    bgColor: String,
    fColor: String,
    content: Number,
    buttonSubmit: Boolean,
    hidden: Boolean
  },
  methods: {
    showGraph() {
      this.isHidden = !this.isHidden;
      this.$emit('clickedShowGraph', this.isHidden);
    }
  }
};
</script>

<style src="./FactsTile.css" scoped></style>