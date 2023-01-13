// console.log("VUE OK", Vue);

const app = Vue.createApp({
    name: "Boolzapp",
    data() {
        return {
            data,
            contacts,
            currentI: 0,
        }
    },
    computed: {


    },
    methods: {
        getAvatarUrl(avatar) {
            return `img/avatar${avatar}.jpg`;
        },
        setCurrentI(i) {
            this.currentI = i;
        }
    },

});




app.mount("#root");
