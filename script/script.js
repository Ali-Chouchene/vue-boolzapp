// console.log("VUE OK", Vue);

const app = Vue.createApp({
    name: "Boolzapp",
    data() {
        return {
            contacts,
        }
    },
    computed: {

        userImg(i) {
            const imgUrl = "img/avatar" + this.contacts.prototype.toString() + ".jpg";
            console.log(imgUrl)
            return imgUrl
        }
    },
    methods: {


    },

});




app.mount("#root");
