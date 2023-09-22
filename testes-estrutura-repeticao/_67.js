const prompt = require('prompt-sync')({ sigint: true })

/* Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15
(inclusive) e 100 (inclusive).  */

let soma = 0;

for(let i = 15; i <= 100; i++){
    soma = soma + i;
    console.log(" + " + i + " = " + soma);
}

let media = soma / 75;

console.log("O resultado da média artimética entre os números (15 a 100) é de: " + media.toFixed(2));