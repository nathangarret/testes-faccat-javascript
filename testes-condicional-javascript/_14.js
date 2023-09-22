const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

/* Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso
contrário escrever NÃO É MAIOR QUE 10!  */

let numero = parseInt(entrada("Informe um número: "));

if(numero > 10){
    console.log("É MAIOR QUE 10");
}else{
    console.log("NÃO É MAIOR DO QUE 10");
}