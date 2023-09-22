const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

let salarioMensal = parseFloat(entrada("Informe o seu salário mensal: "));

let percentualReajuste = parseFloat(entrada("Informe o percentual de reajuste: "));

let reajuste = ((percentualReajuste * salarioMensal) / 100) + salarioMensal;

// console.log(reajuste);

console.log("O salário após o reajuste é de: " + reajuste);