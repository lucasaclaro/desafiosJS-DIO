function calcularDesconto (m, d) {
    let preco = m;
    let desconto = d;
    let valorDesconto = ((preco - desconto) * 100) /  preco


    return `O desconto foi de ${valorDesconto}% `

}


console.log(calcularDesconto(40,30));