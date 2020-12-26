const app = Vue.createApp({
    data() {
      return{
        name : "Moayad ",
        age : 24,
      }
    },
    methods: {
      result(){
        return this.age * 5;
      },
      math(){
        return Math.random();
      }
    },
   
  },);
app.mount("#exercise")
  
  