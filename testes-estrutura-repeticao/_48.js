const entrada = require('prompt-sync')({ sigint: true })

// Descrição   : Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule e imprima a
// média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada
// nota.

function lerNota(mensagem){
    let nota;
    do{
        nota = parseFloat(entrada(mensagem));
    }while(isNaN(nota) || nota < 0 || nota > 10);
    return nota;
}

const notaUm = lerNota("Digite a nota da 1ª avaliação (entre 0 e 10): ");

const notaDois = lerNota("Digite a nota da 2ª avaliação (entre 0 e 10): ");

const media = (notaUm + notaDois) / 2;

console.log(`A média entre as duas notas é de: ${media}`);