const produto1 = "Computador"
const produto2 = "TV"
const preco1 = 2100.5
const preco2 = 1830.0
const idade = 30
const codigo = 5291
const genero = "F"


console.log('Natalia tem', idade, 'anos e resolveu comprar um ' + produto1, 'que custou R$' + preco1)

const divisao = 10/10 
console.log(divisao)

// CONVERTE O VALOR DE KM RODADO 
const precoCombustivel = 5.79;
const combustivelPorKm = 12;
const distanciaKm = 1580;

const gastoViagem = (distanciaKm / combustivelPorKm) * precoCombustivel;
console.log(gastoViagem.toFixed(2)); // O toFixed Converte o valor em texto 