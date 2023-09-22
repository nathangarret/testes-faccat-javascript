const entrada = require('prompt-sync')({ sigint: true })

/* Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS. */

let contadorNegativo = 0;

for(let i = 1; i <= 10; i++){
    const numero = parseFloat(entrada("Informe um número: "));

    if(numero < 0){
        contadorNegativo++;
    }
}

console.log("Dos números informados: " + contadorNegativo + " são negativos.");