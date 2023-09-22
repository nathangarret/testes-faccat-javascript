const entrada = require('prompt-sync')({ sigint: true })

const x = parseFloat(entrada("Informe o valor de (x): "));

const y = parseFloat(entrada("Informe o valor de (y): "));

const z = parseFloat(entrada("Informe o valor de (z): "));

let conta = (x * y) + 5;
let resposta;

if(conta <= 0){
    resposta = "A";
}else if(conta <= 100){
    resposta = "B";
}else{
    resposta = "C";
}

console.log("A resposta da solução será no valor de: " + z);
console.log("A resposta da solução será no valor de: " + resposta);

// x   | y  | z   | resposta
// ---------------|---------
// 3   | 2  | 11  |    B
// 150 | 3  | 455 |    C
// 7   | -1 | -2  |    A
// -2  | 5  | -5  |    A
// 50  | 3  | 155 |    C