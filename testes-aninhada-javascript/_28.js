const entrada = require('prompt-sync')({ sigint: true })

// Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 

let numerou_um = parseInt(entrada("Informe o primeiro valor: "));

let numerou_dois = parseInt(entrada("Informe o segundo valor: "));

let numerou_tres = parseInt(entrada("Informe o terceiro valor: "));

let maior;

if (numerou_um != numerou_dois && numerou_um != numerou_tres) {
    if (numerou_dois != numerou_um && numerou_dois != numerou_tres) {
        if (numerou_tres != numerou_um && numerou_tres != numerou_dois) {
            if(numerou_um > numerou_dois && numerou_um > numerou_tres){
                maior = numerou_um;
            }else if(numerou_dois > numerou_um &&  numerou_dois > numerou_tres){
                maior = numerou_dois;
            }else{
                maior = numerou_tres;
            }
        }
    }
} else {
    console.log("Você digitou números iguais.");
}

console.log("O maior número informado foi: " + maior);