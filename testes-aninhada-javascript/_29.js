const entrada = require('prompt-sync')({ sigint: true })

// Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores. 

const numero_um = parseInt(entrada("Informe o primeiro valor: "));

const numero_dois = parseInt(entrada("Informe o segundo valor: "));

const numero_tres = parseInt(entrada("Informe o terceiro valor: "));

if (numero_um != numero_dois && numero_um != numero_tres) {
    if (numero_dois != numero_um && numero_dois != numero_tres) {
        if (numero_tres != numero_um && numero_tres != numero_dois) {
            if (numero_um > numero_dois && numero_um > numero_tres) {
                console.log("A soma dos dois maiores valores é:", numero_um + Math.max(numero_dois, numero_tres));
            } else if (numero_dois > numero_um && numero_dois > numero_tres) {
                console.log("A soma dos dois maiores valores é:", numero_dois + Math.max(numero_um, numero_tres));
            } else {
                console.log("A soma dos dois maiores valores é:", numero_tres + Math.max(numero_um, numero_dois));
            }
        }
    }
} else {
    console.log("Você digitou números iguais.");
}

