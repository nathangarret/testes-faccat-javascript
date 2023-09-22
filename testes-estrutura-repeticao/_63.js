const entrada = require('prompt-sync')({sigint:true})

/* Escreva um algoritmo para ler 10 números e ao final da leitura escrever a soma total dos 10
números lidos. */ 

let soma = 0;

for(let i = 1; i <= 10; i++){
    const valores = parseFloat(entrada("Informe um valor: "));
    soma += valores;
}

console.log("A soma entre os números é de: " + parseFloat(soma));