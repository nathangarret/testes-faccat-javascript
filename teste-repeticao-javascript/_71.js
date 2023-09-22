const entrada = require('prompt-sync')({ sigint: true })

/* Faça um algoritmo para ler uma quantidade e a seguir ler esta quantidade de números. Depois de
ler todos os números o algoritmo deve apresentar na tela o maior dos números lidos e a média dos
números lidos. */

const quantidadeNumeros = parseInt(entrada("Informe uma quantidade: (para seguir até esta quantidade no valor): "));

for(let i = 0; i < quantidadeNumeros; i++){
    console.log(`Olá você digitou o valor de ${quantidadeNumeros}x.`);
}
