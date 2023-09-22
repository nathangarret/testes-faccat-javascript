const entrada = require('prompt-sync')({ sigint: true })

/* Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. */

const combustivel = entrada("Informe qual comubustível foi colocado informe (A para Álcool) ou (G para gasolina): ")    ;

const numLitros = parseFloat(entrada("Informe a quantidade de litros de comubustível: "));

let valorTotal;

if (combustivel == "A" || combustivel == "a") {
    if (numLitros <= 20) {
        valorTotal = ((numLitros * 2.9) * 1.03);
    } else {
        valorTotal = ((numLitros * 2.9) * 1.05);
    }
}

if (combustivel == "G" || combustivel == "g") {
    if (numLitros <= 20) {
        valorTotal = ((numLitros * 3.3) * 1.04);
    } else {
        valorTotal = ((numLitros * 3.3) * 1.06);
    }
}

console.log("O valor a ser pago pelo cliente será de: ", parseFloat(valorTotal));