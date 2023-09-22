const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

/* 11) Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.  */

let salarioFixo = parseFloat(entrada("Informe seu salário fixo mensal: "));

let comissaoVenda = parseFloat(entrada("Informe o valor de comissão por venda: "));

let numeroVendas = parseInt(entrada("Informe a quantidade de vendas mensal: "));

let percentualVenda = comissaoVenda * numeroVendas;

let salarioFinal = (((vendasComissao * salarioFixo) * 1.05) / 100) + salarioFixo;

console.log("O salário final sera no valor de: " + salarioFinal);
