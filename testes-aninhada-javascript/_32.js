const entrada = require('prompt-sync')({ sigint: true })

/* Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.  */

const nome_time_um = String(entrada("Informe o nome do time (A): "));
const gols_timeUM = String(entrada("Gols marcado na parida pelo time (A): "));

const nome_time_dois = String(entrada("Informe o nome do time (B): "));
const gols_timeDois = String(entrada("Gols marcado na parida pelo time (B): "));

if(gols_timeUM == gols_timeDois){
    console.log("Partida foi encerado em empate");
    console.log(`No resultado de time ${nome_time_um} ${gols_timeUM} x ${gols_timeDois} ${nome_time_dois}`);
}else if(gols_timeUM > gols_timeDois){
    console.log(`O vencedor foi o time ${nome_time_um}: `);
    console.log(`No resultado de ${gols_timeUM} x ${gols_timeDois}`);
}else{
    console.log(`O vencedor foi o time ${nome_time_dois}: `);
    console.log(`No resultado de ${gols_timeDois} x ${gols_timeUM}`);
}