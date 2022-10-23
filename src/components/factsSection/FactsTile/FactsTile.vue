<template>
    <div class="facts_box" :style="{backgroundColor: bgColor}">
        <h3 v-if="title != null" class="facts_box__h3">{{title}}</h3>
        <p v-if="content != null" class="facts_box__p">{{content}}</p>
        <button class="facts_box__button" v-if="buttonSubmit === true">Show</button>
    </div>
</template>

<script>

export default {
  props: {
    title: String,
    bgColor: String,
    content: Number,
    buttonSubmit: Boolean,
  },
  data() {
    return {
        // color: 'green'
    }
  }
};
</script>

<style src="./FactsTile.css" scoped></style>