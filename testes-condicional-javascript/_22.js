/* A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas).  */

const entrada = require('prompt-sync')({ sigint: true })

let horas_trabalhadasMes = parseInt(entrada("Digite o número de horas trabalhadas no mês: "));
let salario_porHora = parseInt(entrada("Digite o salário por hora: "));

let jornada_semanal = 40;
let ascrescimo_horas = 1.5;

let salario_base = jornada_semanal + salario_porHora;

let horas_extra;
let salario_extra;


if(horas_trabalhadasMes > jornada_semanal * 4){
    horas_extra = horas_trabalhadasMes - (jornada_semanal * 4);
    salario_extra = horas_extra * salario_porHora * ascrescimo_horas;
}else{
    horas_extra = 0;
    salario_extra = 0;
}

let salario_total = salario_base + salario_extra;

console.log("Salário base: R$" + salario_base);
console.log("Horas extras: " + horas_extra + " h");
console.log("Salário extra R$" + salario_extra);
console.log("Salário total: R$" +   salario_total);