const entrada = require('prompt-sync')({ sigint: true })

/* Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada. */

let notaUm = parseFloat(entrada("Informe a primeira nota: "));

let notaDois = parseFloat(entrada("Informe a segunda nota: "));

let media = parseFloat(notaUm + notaDois) / 2;

if (media >= 6) {
    console.log("A média final será no valor total de: " + media.toFixed(2));
    console.log("VOCÊ FOI APROVADO");
} else {
    console.log("A média final será no valor total de: " + media.toFixed(2));
    console.log("VOCÊ NÃO FOI APROVADO :(");
}