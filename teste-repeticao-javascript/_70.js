const entrada = require('prompt-sync')({ sigint: true })

/* Faça um programa que leia 100 valores e no final, escreva o maior e o menor valor lido. */

let maior = Number.NEGATIVE_INFINITY;
let menor = Number.POSITIVE_INFINITY;
let numero;

for (let i = 1; i < 5; i++) {

    numero = parseFloat(entrada("Informe um valor: "));

    if(numero > maior){
        maior = numero;
    }

    if(numero < menor){
        menor = numero;
    }
}

console.log(maior);
console.log(menor);