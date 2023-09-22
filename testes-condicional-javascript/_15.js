const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

/* Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).  */

let numero = parseInt(entrada("Informe um número: "));

if(numero < 0){
    console.log("ESTE NÚMERO É NEGATIVO");
}else{
    console.log("ESTE NÚMERO É POSITIVO");
}