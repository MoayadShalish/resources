const app = Vue.createApp({
  data() {
    return {
      value: "",
      
    };
  },
  methods: {
    showalert(){
      alert("hi");
    },
    handlevent: function (event) {
      this.value = event.target.value
    }
  },
});
app.mount("#exercise");
