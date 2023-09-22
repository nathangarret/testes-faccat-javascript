const entrada = require('prompt-sync')({ sigint: true })

/* 
para sexo masculino: peso ideal = (72.7 * altura) - 58;

para sexo feminino: peso ideal = (62.1 * altura) - 44.7; 
*/

let sexoPessoa = entrada("Informe seu sexo: (M para Masculino ou F para Feminino): ");

let alturaPessoa = parseFloat(entrada("Informe a sua altura: "));

let pesoIdeal;

if(sexoPessoa == "M" || sexoPessoa == "m"){
    pesoIdeal = (72.7 * alturaPessoa) - 58;
    console.log("O seu peso ideal é de: " + pesoIdeal.toFixed(2) + "Kg");
}else if(sexoPessoa == "F" || sexoPessoa == "f"){
    pesoIdeal = (62.1 * alturaPessoa) - 44.7;
    console.log("O seu peso ideal é de: " + pesoIdeal.toFixed(2) + "Kg");
}else{
    console.log("Informe valores válidos!");
}