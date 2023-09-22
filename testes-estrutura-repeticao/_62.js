const entrada = require('prompt-sync')({ sigint: true })

/*Ler o número de alunos existentes em uma turma e, após isto, ler as notas destes alunos, calcular e
escrever a média aritmética dessas notas lidas. */

let soma = 0;

const numeroTurma = parseInt(entrada("Informe o número de alunos da turma: "));

for(let i = 1; i <= numeroTurma; i++){
    const valores = parseFloat(entrada("Informe a nota do " + i + "ª" + " aluno: "));
    soma += valores;
}

const media = soma / numeroTurma;

console.log("A nota média da turma é de: " + parseFloat(media));