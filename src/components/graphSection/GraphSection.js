export default {
  components: {},
  props: {
    history: Object,
    bmi: Number,
  },
  data() {
    return {
      historyData: [],
    };
  },
  watch: {
    history(newHistory) {
      this.historyData.push(newHistory);
    },
  },
};
