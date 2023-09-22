const entrada = require('prompt-sync')({ sigint: true })

/* 
Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido
um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado
da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA).
*/


let numeroUm = parseInt(entrada("Informe o número (A): "));
let numeroDois = parseInt(entrada("Informe o número (B): "));

while(numeroDois <= 0){
    console.log("VALOR INVÁLIDO");
    numeroDois = parseInt(entrada("Informe o número (B) sendo ele maior do que 0: "));
}

let divisaoNumeros = numeroUm / numeroDois;

console.log("O resultado da divisão do número (UM) pelo número (dois) é: " + divisaoNumeros.toFixed(2));