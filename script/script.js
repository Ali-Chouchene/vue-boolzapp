// console.log("VUE OK", Vue);

//* LUNOX*//
const DateTime = luxon.DateTime;

let id = "";

const app = Vue.createApp({
    name: "Boolzapp",
    data() {
        return {
            data,
            contacts,
            currentI: 0,
            newMessage: "",
            filterWord: "".toLowerCase(),
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

        filteredList() {
            const searchedWord = this.filterWord.toLowerCase();
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(searchedWord)
            })
        },
        lastMessage() {
            this.contacs.messages.forEach(message => {
                message.length - 1;
                console.log(message)
                return message
            })
        },

    },
    methods: {
        getAvatarUrl(avatar) {
            return `img/avatar${avatar}.jpg`;
        },
        setCurrentI(id) {
            this.currentI = id - 1;
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
            this.bottomFocus()
        },
        bottomFocus() {
            const target = this.$refs.chat;
            if (target) {
                target.scrollTop = target.scrollHeight;
            }
        },
        resetInput() {
            this.newMessage = "";
        },
        delMessage(i) {
            this.contacts[this.currentI].messages
                .splice(i, 1);
        },
    },


});



app.mount("#root");
