// Faça um programa para calcular o valor de uma viagem

// Você terá 5 variáveis, sendo elas:

// 1 - Preço do combustivel 
// 2 - Preço da gasolina
// 3 - O tipo de combustivel que está no carro
// 4- gasto médio de combustivel do carro por KM 
// 5 - distancia em KM da viagem

// Imprima no Console o gasto para realizar a viagem


// CONVERTE O VALOR DE KM RODADO 
const precoCombustivel = 5.79;
const combustivelPorKm = 12;
const distanciaKm = 1580;

const gastoViagem = (distanciaKm / combustivelPorKm) * precoCombustivel;
console.log(gastoViagem.toFixed(2)); // O toFixed Converte o valor em texto 