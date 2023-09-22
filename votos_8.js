const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

let numeroTotalEleitores = parseInt(entrada("Informe o número total de eleitores: "));

let numeroVotosBrancos = parseFloat(entrada("Informe o número total de votos em branco: "));

let numeroVotosNulos = parseFloat(entrada("Informe o número total de votos nulos: "));

let numeroVotosValidos = parseFloat(entrada("Informe o número total de votos válidos: "));

let percentualVotosBrancos = (numeroVotosBrancos / numeroTotalEleitores) * 100;

let percentualVotosNulos = (numeroVotosNulos / numeroTotalEleitores) * 100;

let percentualVotosValidos = (numeroVotosValidos / numeroTotalEleitores) * 100;

console.log("Percentual de votos Brancos: " + percentualVotosBrancos.toFixed(2) + "%");
console.log("Percentual de votos Nulos: " + percentualVotosNulos.toFixed(2) + "%");
console.log("Percentual de votos Válidos: " + percentualVotosValidos.toFixed(2) + "%");