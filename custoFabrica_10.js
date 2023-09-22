const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

let custoFabrica = parseFloat(entrada("Informe o valor do custo de fábrica do carro: "));

let reajusCustoFabrica = custoFabrica * 1.73; // 1.73 - se remete ao 28% do distribuidor e 45% dos impostos

console.log("O valor final para o consumidor será no valor de: " + reajusCustoFabrica);