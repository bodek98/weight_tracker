export default {
  props: {
    title: String,
    bgColor: String,
    fColor: String,
    content: Number,
    buttonSubmit: Boolean,
    hidden: Boolean,
  },
  data() {
    return {
      isHiddenLoc: true,
    };
  },
  methods: {
    showGraph() {
      this.isHidden = !this.isHidden;
      this.isHiddenLoc = !this.isHidden;
      this.$emit("clickedShowGraph", this.isHidden);
    },
  },
};
