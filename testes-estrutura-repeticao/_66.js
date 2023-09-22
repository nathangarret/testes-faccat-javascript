const entrada = require('prompt-sync')({ sigint: true })

/* O mesmo exercício anterior, mas agora, considere que o segundo valor lido poderá ser maior ou
menor que o primeiro valor lido, ou seja, deve-se testá-los. */

let soma = 0;

do{
    const valor1 = parseInt(entrada("Digite o primeiro valor:"));
    const valor2 = parseInt(entrada("Digite o segundo valor:"));

    soma = valor1 + valor2;
}while(soma > 0);

console.log("Esses números são: (A):", valor1, " e (B): ", valor2);
console.log("A soma ente valor (B) e valor (A) é de: ", soma);