const entrada = require('prompt-sync')({ sigint: true })

/* Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. */

let horaInicio = parseInt(entrada("Informe que horas começou o jogo(apenas horas inteiras): "));

let horaFim = parseInt(entrada("Informe que horas finalizou o jogo(apenas horas inteiras): "));

let duracao;

if (horaFim >= horaInicio) {
    duracao = horaFim - horaInicio;
} else {
    duracao = 24 - horaInicio + horaFim;
}

console.log(`A duração do jogo é de ${duracao} horas.`);