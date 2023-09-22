const entrada = require('prompt-sync')({sigint:true})

/* Escreva um algoritmo para ler 10 números. Todos os números lidos com valor inferior a 40 devem
ser somados. Escreva o valor final da soma efetuada.  */

let soma = 0;

for(let i = 1; i <= 10; i++){
    const numeros = parseInt(entrada("Informe um valor: "));

    if(numeros < 40){
        soma = soma + numeros;
    }
}

console.log("A soma entre os números é de: " + parseFloat(soma));