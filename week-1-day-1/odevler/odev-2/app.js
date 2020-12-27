const app = Vue.createApp({
  data() {
    return {
      value: "",
      value2: ""
    };
  },
  methods: {
    showalert(){
      alert("hi");
    },
    handlevent: function (event) {
      this.value = event.target.value
    },
    handlevent2: function (event) {
      this.value2 = event.target.value
    }
  },
});
app.mount("#exercise");
