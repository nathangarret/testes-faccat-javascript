const entrada = require('prompt-sync')({sigint:true})

/* Ler o ano atual e o ano de nascimento de uma pessoa. 
Escrever uma mensagem que diga se ela poderá ou 
não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).  */

let anoNascimento = parseInt(entrada("Informe o ano de nacimento: "));

let podeVotar = 2023 - anoNascimento;

if(podeVotar >= 18){
    console.log("Você poderá votar!!!");
}else{
    console.log("Você não poderá votar!!!");
}