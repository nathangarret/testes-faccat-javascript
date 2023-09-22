/* Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a
área do retângulo */

const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

let baseRetangulo = parseFloat(entrada("Informe a base do retângulo: "));

let alturaRetangulo = parseFloat(entrada("Informe a altura do retângulo: "));

let areaRetangulo = baseRetangulo * alturaRetangulo;

console.log("A área do retângulo será no valor de: " + areaRetangulo);