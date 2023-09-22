const entrada = require('prompt-sync')({ sigint: true })

/* Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor
lido. */ 

let numero = parseInt(entrada("Informe um número para saber a sua tabuada: "));

for(let i = 1; i < 11; i++){
    console.log(numero + "*" + i + " = " + numero * i);
}