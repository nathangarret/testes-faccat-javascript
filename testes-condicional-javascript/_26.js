const prompt = require('prompt-sync')({sigint:true})

/* 
Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra'. 
*/

let quantidadeAtual = parseFloat(prompt("Informe a quantidade atual em estoque: "));

let quantidadeMinima = parseFloat(prompt("Informe a quantidade máxima em estoque: "));
let quantidadeMaxima = parseFloat(prompt("Informe a quantidade miníma em estoque: "));

let quantidadeMedia = ((quantidadeMaxima + quantidadeMinima) / 2);

if (quantidadeAtual >= quantidadeMedia){
    console.log("Não efetuar compra!");
}else{
    console.log("Efetuar compra!");
}