data = '01/11/2022'

let diaZero = data[0];
let diaUm = data[1];
let dia = data.substr(0, 1)

let mesZero = data[3];
let mesUm = data[4];
let mes = mesZero + mesUm;
let anoZero = data[6];
let anoUm = data[7];
let anoDois = data[8];
let anoTres = data[9];
let ano = anoZero + anoUm + anoDois + anoTres;

if (mes === '01') {
    mes = 'Janeiro'
    console.log((`${dia} de ${mes} de ${ano}.`))
} else if (mes === '02') {
    mes = 'Fevereiro'
    console.log((`${dia} de ${mes} de ${ano}.`))
} else if (mes === '03') {
    mes = 'Março'
    console.log((`${dia} de ${mes} de ${ano}.`))
} else if (mes === '04') {
    mes = 'Abril'
    console.log((`${dia} de ${mes} de ${ano}.`))
} else if (mes === '05') {
    mes = 'Maio'
    console.log((`${dia} de ${mes} de ${ano}.`))
} else if (mes === '06') {
    mes = 'Junho'
    console.log((`${dia} de ${mes} de ${ano}.`))
} else if (mes === '07') {
    mes = 'Julho'
    console.log((`${dia} de ${mes} de ${ano}.`))
} else if (mes === '08') {
    mes = 'Agosto'
    console.log((`${dia} de ${mes} de ${ano}.`))
} else if (mes === '09') {
    mes = 'Setembro'
    console.log((`${dia} de ${mes} de ${ano}.`))
} else if (mes === '10') {
    mes = 'Outubro'
    console.log((`${dia} de ${mes} de ${ano}.`))
} else if (mes === '11') {
    mes = 'Novembro'
    console.log((`${dia} de ${mes} de ${ano}.`))
} else if (mes === '12') {
    mes = 'Dezembro'
    console.log((`${dia} de ${mes} de ${ano}.`))
}

