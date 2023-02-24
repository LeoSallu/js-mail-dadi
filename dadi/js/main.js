'use strict'
//Constante Bottone
const button = document.getElementById('RandomNumber');
//Evento click Bottone
button.addEventListener('click', 
function(){
    //Numero random Computer
const numeroCom = Math.floor(Math.random() * 6 + 1);
//Numero Utente
const numeroUtente = Math.floor(Math.random() * 6 + 1);
//Impostazione if
    if(numeroCom>numeroUtente){
        alert('IL VINCITORE SONO IO');
    }
    else if (numeroCom<numeroUtente){
        alert('BRAVO HAI VINTO TU');
    }
    else if (numeroCom===numeroUtente){
        alert('PER QUESTA VOLTA É UN PAREGGIO');
    }
    console.log(numeroCom, numeroUtente);
})
