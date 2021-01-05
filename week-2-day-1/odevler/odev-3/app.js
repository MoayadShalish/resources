const app = Vue.createApp({
    data() {
        return {
            value: 0,
            result: null,
        }
    },
    computed: {
        result: function() {
           return this.value === 33 ? "Completed" : "Not Yet!!";
        },

    },

    watch: {
        value(v) {
            if (v === 33) {
                this.result = "Completed";
            }else {
                this.result = "Not Yet!!";
            }
        },
        reset() {
            setTimeout(() => {
                this.value = 0;
            }, 2000);
        },
    },




});

app.mount("#exercise");
