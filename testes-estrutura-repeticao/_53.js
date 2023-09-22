const entrada = require('prompt-sync')({ sigint: true })

/* Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere
que o N será sempre maior que ZERO. */

const numero = parseInt(entrada("Infome um número: "));

/* for(let i = 1; i <= numero; i++){
    console.log(i);
} */

let i = 1;

while(i <= numero){
    console.log(i);
    i++;
}