const entrada = require('prompt-sync')({sigint:true})

/* Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total.  */

let salarioFixo = parseFloat(entrada("Informe o seu salário fixo: "));

let valorVendas = parseFloat(entrada("Informe o valor total de vendas: "));

let comissaoVendas;

if(valorVendas <= 1.500){
    comissaoVendas = (valorVendas * 1.03);
    salarioTotal = salarioFixo + comissaoVendas;
    console.log("O salário total será no valor de: " + salarioTotal.toFixed(2));
}else{
    comissaoVendas = (valorVendas * 1.08);
    salarioTotal = salarioFixo + comissaoVendas;
    console.log("O salário total será no valor de: " + salarioTotal.toFixed(2));
}