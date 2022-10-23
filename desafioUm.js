// Contar vogais e espaços em branco

let str = 'a vida e louca'; 
let strSplit = str.split('');
let contA = 0;
let contE = 0;
let contI = 0;
let contO = 0;
let contU = 0;
let contEspaco = 0;


for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] == 'a') {
        contA += 1
    } else if (strSplit[i] == 'e') {
        contE += 1;
    } else if (strSplit[i] == 'i') {
        contI += 1;
    } else if (strSplit[i] == 'o') {
        contO += 1;
    } else if (strSplit[i] == 'u') {
        contU += 1;
    } else if (strSplit[i] == ' ') {
        contEspaco += 1;
    } {
        continue;
    }
}

let vogais = contA + contE + contI + contO + contU;



console.log(`Espacos em branco: ${contEspaco} Vogais: ${vogais}`);

