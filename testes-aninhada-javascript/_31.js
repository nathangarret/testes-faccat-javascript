const entrada = require('prompt-sync')({ sigint: true })

// Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
// ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
// dos outros 2 lados.

const ladoA = parseFloat(entrada("Informe o valor do lado (A): "));

const ladoB = parseFloat(entrada("Informe o valor do lado (B): "))

const ladoC = parseFloat(entrada("Informe o valor do lado (C): "));

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    console.log("Com os número informados é um triângulo.");
}else{
    console.log("Com os número informados não formam um triângulo.");
}