/* Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor */

const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

let numero = parseInt(entrada("Informe um número para saber o seu sucessor: "));

let sucessor = numero - 1;

console.log("O número informado foi: " + numero + " e o seu antecessor é: " + sucessor);