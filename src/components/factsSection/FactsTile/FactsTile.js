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