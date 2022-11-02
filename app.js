Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter(value) {
      if (value > 0) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 5000);
      }
    },
  },
  computed: {
    notification() {
      if (this.counter <= 37) {
        return "Not there yet";
      }
      return "Too much!";
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  },
}).mount("#assignment");
