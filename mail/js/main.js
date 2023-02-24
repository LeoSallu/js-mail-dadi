'use strict';
        //Array 
const mail = ['pippo@gmail.com','franco@gmail.com','amilcare@gmail.com','orlando@gmail.com','gino@gmail.com'];
        //Variabili
const mailInput = prompt('Inserisci la tua mail');
let join = false;
        //Ciclo per verificare la Mail dell'utente   
for(let i=0; i<mail.lenght; i++){
    const mailUtente = mail[i];
    if(mailInput===mailUtente){
        join=true;
    }
    else if(mailInput!==mailUtente){
        join=false;
    }
}
if(join===true){
    alert('Bravo tu puoi passare');
}
 else if(join===false){
    alert('Tu non puoi passare');
 }   

