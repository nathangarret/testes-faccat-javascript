const entrada = require('prompt-sync')({sigint:true})

// Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. 

let numeroUm = parseInt(entrada("Informe um número: "));

let numeroDois = parseInt(entrada("Informe um número: "));

let maior;
let menor;

if(numeroUm > numeroDois){
    maior = numeroUm;
    menor = numeroDois;
}else{
    maior = numeroDois;
    menor = numeroUm;
}

console.log("Em ordem crescente o números ficam: " + menor, maior);
