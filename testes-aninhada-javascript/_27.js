const entrada = require('prompt-sync')({sigint:true})

/* 27) Ler um valor e escrever se é positivo, negativo ou zero. */

let valor = parseInt(entrada("Informe um valor: "));

if(valor >= 1){
    console.log("POSITIVO");
}else if(valor == 0){
    console.log("ZERO");
}else{
    console.log("NEGATIVO");
}