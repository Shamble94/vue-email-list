const { createApp } = Vue;


createApp({
    data(){
        return{
            /* ARRAY VUOTO */
            email_list: []
        }
    },
    methods:{
        /* FUNZIONE CHE GENERA 10 EMAIL CASUALI */
        generateMail() {
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
                    /* PUSH DEL RISULTATO NELL'ARRAY */
                    this.email_list.push(result.data.response);
                
                });
                /* COSI FACENDO AD OGNI CLICK GENERO UNA LISTA NUOVA */
                this.email_list = []
            }
            
        }
        
    },
}).mount(`#app`);