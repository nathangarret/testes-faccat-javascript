const entrada = require('prompt-sync')({ sigint: true })

/* Ler 2 valores, calcular e escrever a soma dos inteiros existentes entre os 2 valores lidos (incluindo
os valores lidos na soma). Considere que o segundo valor lido será sempre maior que o primeiro valor
lido. */

const valor1 = parseInt(entrada("Digite o primeiro valor:"));
let valor2 = parseInt(entrada("Digite o segundo valor:"));

if (valor2 < valor1) {
    do {
        valor2 = parseInt(entrada("Digite o segundo valor:"));
    }while(valor1 > valor2);
}

let soma = valor1 + valor2;

console.log("Valor (B) informado foi maior do que o valor (A)");
console.log("Esses números são: (A):" + valor1 + " e (B):" + valor2);
console.log("A soma ente valor (B) e valor (A) é de:" + soma);