const soma = function (x, y)  {
    return x + y
}
const imprimirresultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}
imprimirresultado(3, 4)
imprimirresultado(2, 4 , soma)
imprimirresultado(2, 4 , function (x, y) {
    return x - y
})
imprimirresultado(2, 4 , (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa!')
    }
}
pessoa.falar()