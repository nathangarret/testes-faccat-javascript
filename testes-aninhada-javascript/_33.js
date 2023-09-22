const entrada = require('prompt-sync')({ sigint: true })

/* 
    Ler dois valores e imprimir uma das três mensagens a seguir:
    ‘Números iguais’, caso os números sejam iguais
    ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
    ‘Segundo maior’, caso o segundo seja maior que o primeiro. 
*/

let valorUm = parseInt(entrada("Informe o primeiro valor: "));

let valorDois = parseInt(entrada("Informe o segundo valor: "));

if(valorUm == valorDois){
    console.log("Números Iguais");
}else if(valorUm > valorDois){
    console.log("Primeiro Número é maior.");
}else{
    console.log("Segundo Número é maior.");
}
