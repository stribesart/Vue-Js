const app = Vue.createApp({
    //Template
    data() {
        return {
            quote: "soy batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote(){
            console.log('Hola Mundo')
            this.author = "Set Reyes"

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')