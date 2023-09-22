/* Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.  */

const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

let idade = parseInt(entrada("Informe a sua idade: "));

let contadorDias = (idade * 12);

let contadorMeses = (idade * 365);

console.log("A sua idade em dias é de: " + contadorDias);

console.log("A sua idade em dias é de: " + contadorMeses);