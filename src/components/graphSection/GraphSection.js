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
  mounted() {
    if (localStorage.historyData) {
      this.historyData = JSON.parse(localStorage.historyData);
    }
  },
  watch: {
    history(newHistory) {
      this.historyData.push(newHistory);
    },
    historyData: {
      handler(newHistoryData) {
        localStorage.historyData = JSON.stringify(newHistoryData);
      },
      deep: true,
    },
  },
};
