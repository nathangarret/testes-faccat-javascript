const entrada = require('prompt-sync')({ sigint: true })

// As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
// compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
// escreva o custo total da compra.

let macasCompradas = parseInt(entrada("Informe a quantidade de maças"));
let valorTotalMarcas;

if (macasCompradas >= 12) {
    valorTotalMarcas = macasCompradas * 1.00;
    console.log("O valor total de compra será de: ", valorTotalMacas)
} else {
    valorTotalMacas < - macasCompradas * 1.30
    console.log("O valor total de compra será de: ", valorTotalMacas)
} 

