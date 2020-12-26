const app = Vue.createApp({
    data() {
      return{
        name : "Moayad ",
        age : 24,
        src : "https://static.wikia.nocookie.net/devilmaycry/images/c/c2/Dante_DMC5.png/revision/latest/scale-to-width-down/1000?cb=20180922220047",
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
  
  