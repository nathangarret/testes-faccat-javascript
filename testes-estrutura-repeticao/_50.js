const entrada = require('prompt-sync')({ sigint: true })

/* Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem
crescente.  */

/* for(let i = 1; i <= 10; i++){
    console.log(i);
} */

let i = 1;

while(i <= 10){
    console.log(i);
    i++;
}