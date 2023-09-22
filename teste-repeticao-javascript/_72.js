const entrada = require('prompt-sync')({sigint:true})

/* Faça um algoritmo para ler o código e o preço de 15 produtos, calcular e escrever:
- o maior preço lido
- a média aritmética dos preços dos produtos */

var codigoProduto;

let precoProduto;

for(let i = 1; i < 16; i++){
    console.log("=========================================================");

    codigoProduto = parseInt(entrada("Informe o código do produto: "));

    precoProduto = parseFloat(entrada("Informe o preço desse produto: "));

    console.log("O código do produto informado é de: " + codigoProduto);
    console.log(`O preço do código ${codigoProduto} é de: R$` + precoProduto);

    console.log("=========================================================");
}