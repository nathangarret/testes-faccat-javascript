const entrada = require('prompt-sync')({ sigint: true })

/* Ler 10 valores, calcular e escrever a média aritmética desses valores lidos. */

let soma = 0;

for(let i = 1; i <= 10; i++){
    const valores = parseFloat(entrada("Informe " + i + "ª" + " sua nota: "));
    soma += valores;
}

const media = soma / 10;

console.log(media);