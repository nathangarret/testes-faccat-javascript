const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

/* Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é:
 n1 * 2 + n2 * 3 + n3 * 5
 mediafinal = -----------------------------------
 10 
*/

let notaUm = parseFloat(entrada("Informe a primeira nota: "));

let notaDois = parseFloat(entrada("Informe a segunda nota: "));

let notaTres = parseFloat(entrada("Informe a terceira nota: "));

let mediaFinal = (notaUm * 2 + notaDois * 3 + notaTres * 5) / 10;

console.log("A média final entre as três notas será no valor total de: " + mediaFinal);