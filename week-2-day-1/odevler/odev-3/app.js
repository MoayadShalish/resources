const app = Vue.createApp({
    data() {
        return{
        value: 0,
        result: '',    
        }
    },
    methods: {
        btn5() {
            return this.value+=5;
        },
        btn1() {
            return this.value+=1;
        }},
    computed: {
        resultFunc: function() {
            
            return this.value == 33 ? "Complete" : "Not Yet!!"
        },
        
    
    }
});
