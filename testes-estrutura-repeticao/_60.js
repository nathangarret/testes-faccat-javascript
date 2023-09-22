const entrada = require('prompt-sync')({ sigint: true })

/* Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] (inlcuindo os
valores 10 e 20 no intervalo) e quantos deles estão fora deste intervalo. */ 

let contador = 0;

for(let i = 1; i <= 10; i++){
    const valores = parseInt(entrada("Informe um valor: "));

    if(valores >= 10 && valores <= 20){
        contador++;
    }
}

console.log("Entre o intevalo de [10,20] possui " + contador + " valores.");