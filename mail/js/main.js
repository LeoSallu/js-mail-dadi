'use strict';
//Array 
const mail = ["pippo@gmail.com","franco@gmail.com","amilcare@gmail.com","orlando@gmail.com","gino@gmail.com"];
let mailUtente = prompt('Inserisci la tua mail');
//Ciclo per verificare la Mail dell'utente   
for(let i=0; i<mail.length; i++){
    if(mailUtente===mail[i]){
        alert('Bravo tu puoi passare');
        break
    }
    else if (mailUtente!==mail[i]){
        alert('Tu non puoi passare');
        break
    }
}
console.log(mailUtente);

    