const entrada = require('prompt-sync')({sigint:true})

// Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 

let numeroUm = parseInt(entrada("Informe um número: "));

let numeroDois = parseInt(entrada("Informe um número: "));

if(numeroUm > numeroDois){
    console.log("O maior número é: " + numeroUm)
}else{
    console.log("O maior número é: " + numeroDois)
}