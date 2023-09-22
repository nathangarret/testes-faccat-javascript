const entrada = require('prompt-sync')({sigint:true})

/* Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. 
Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). 
Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo',
senão escrever a mensagem 'Saldo Negativo'. */

let numeroConta = parseInt(entrada("Informe o número da conta: "));

let saldoConta = parseFloat(entrada("Informe o saldo da conta: "));
let saldoDebito = parseFloat(entrada("Informe o saldo de débito na conta: "));
let saldoCredito = parseFloat(entrada("Infrome o saldo de crédito na conta: "));

let saldoAtual = (saldoConta + saldoDebito + saldoCredito);

if(saldoAtual >= 1){
    console.log("Número da conta informado: " + numeroConta);
    console.log("Saldo POSITIVO!");
    console.log("O saldo da sua conta está estimado em: " + saldoAtual);
}else{
    console.log("Número da conta informado: " + numeroConta);
    console.log("Saldo NEGATIVO!");
}