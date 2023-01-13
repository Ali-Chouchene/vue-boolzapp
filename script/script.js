// console.log("VUE OK", Vue);

//* LUNOX*//
const DateTime = luxon.DateTime;

let now = "";

const app = Vue.createApp({
    name: "Boolzapp",
    data() {
        return {
            data,
            contacts,
            currentI: 0,
            newMessage: "",
            DateTime,
        }
    },
    computed: {
        currentContact() {
            return this.contacts[this.currentI];
        },
        currentChat() {
            return this.currentContact.messages;
        },
    },
    methods: {
        getAvatarUrl(avatar) {
            return `img/avatar${avatar}.jpg`;
        },
        setCurrentI(index) {
            this.currentI = index;
        },
        getCurrentTime() {
            return DateTime.now().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
        },
        addMessage() {
            if (this.newMessage) {
                const newMess = {
                    date: this.getCurrentTime(),
                    text: this.newMessage,
                    status: 'sent',

                };
                this.currentContact.messages.push(newMess);
                this.resetInput();
                this.$refs.inputFocus.focus();


                setTimeout(this.okPush, 1000);
            }

        },
        /**risposta**/
        okPush() {
            const newReceived = {
                date: this.getCurrentTime(),
                text: "Ok!",
                status: 'received',
            };
            this.currentContact.messages.push(newReceived);
        },
        resetInput() {
            this.newMessage = "";
        },
        createReceived() {

        },
        // pushCreateReceived() {
        //     setTimeout(this.createReceived, 5000);

        // }
    },

});

app.mount("#root");
