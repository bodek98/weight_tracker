import addWeight from "./addWeight/addWeight.vue";

export default {
  components: {
    addWeight
  },
  props: {
    msg: String,
  },
  data() {
    return {
      bmi: 0,
      historyData: []
    };
  },
  methods: {
    bmiDataSenderSecond(value) {
      this.bmi = value;
      this.$emit('getBmi', this.bmi)
    },
    historyDataSenderSecond(value) {
      this.historyData = value;
      this.$emit('getHistory', this.historyData)
    },
  },
};