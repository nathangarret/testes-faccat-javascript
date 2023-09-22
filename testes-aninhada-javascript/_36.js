const entrada = require('prompt-sync')({ sigint: true })

/* Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
novo com a mulher mais velha. */

let homemUm = parseInt(entrada("Informe a idade do homem um: "));
let homemDois = parseInt(entrada("Informe a idade do homem dois: "));

let mulherUm = parseInt(entrada("Informe a idade da mulher um: "));
let mulherDois = parseInt(entrada("Informe a idade da mulher dois: "));

var maisVelho;
var maisNovo;

if (homemUm > homemDois) {
    maisVelho = homemUm;
}else{
    maisVelho = homemDois;
}

if(homemUm > homemDois){
    maisNovo = homemDois;
}else{
    maisNovo = homemUm;
}

var maisVelha;
var maisNova;

if (mulherUm > mulherDois) {
    maisVelha = mulherUm;
}else{
    maisVelha = mulherDois;
}

if(mulherUm > mulherDois){
    maisNova = mulherDois;
}else{
    maisNova = mulherUm;
}

let soma = maisVelho + maisNova;
let produto = maisNovo * maisVelha;

console.log("A soma das idades do homem mais velho com a mulher mais nova é: ", soma);
console.log("O produto das idades do homem mais novo com a mulher mais velha é: ", produto);