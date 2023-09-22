const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

/* Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
correspondente em graus Celsius (baseado na fórmula abaixo):
 C F - 32
 ---------- = -----------
 5 9
Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F 

(grausFahrenheit - 32) * (5/9) = Fahrenheint para Celsius

resultadoConversao <- ((9 * grausCelsius) + 160) / 5 - Celsius para Fahrenheint

*/

let grausFahrenheint = parseFloat(entrada("Informe o valor em graus Fahrenheint: "));

let conversaoCelsius = (grausFahrenheint - 32) * (5 / 9);

console.log("Apos a conversão, em graus Celsius será de: " + conversaoCelsius.toFixed(2) + "C");