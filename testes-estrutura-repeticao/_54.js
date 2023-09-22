const entrada = require('prompt-sync')({ sigint: true })

/* Modifique o exercício anterior para aceitar somente valores maiores que 0 para N. Caso o valor
informado (para N) não seja maior que 0, deverá ser lido um novo valor para N.  */

let n;

do {
    n = parseInt(entrada("Digite um valor maior que 0 para N:"));
} while (n <= 0 || isNaN(n));

for (let numero = 1; numero <= n; numero++) {
    console.log(numero);
}