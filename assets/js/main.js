
/* Descrizione:

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

var app = new Vue({
el: '#app',
data: {

    arrayEmail:[],

    lunghezzaArray: 10,
    
},
mounted() {

},
beforeUpdate() {

},
methods: {

    start(){

        this.arrayEmail = []

        for(let i = 0; i < 10; i++){

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) =>{

        /* console.log(response.data.response) */
            let email = response.data.response

            if(this.arrayEmail.length < this.lunghezzaArray){

            this.arrayEmail.push(email)
            /* console.log(this.arrayEmail) */
            }

        }) 
        }
        
    },


}
})