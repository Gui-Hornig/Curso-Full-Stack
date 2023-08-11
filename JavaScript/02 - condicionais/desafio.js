// Faça um programa para calcular o valor de uma viagem

// Você terá 5 variáveis, sendo elas:

// 1 - Preço do combustivel 
// 2 - Preço da gasolina
// 3 - O tipo de combustivel que está no carro
// 4- gasto médio de combustivel do carro por KM 
// 5 - distancia em KM da viagem

// Imprima no Console o gasto para realizar a viagem


const precoLitroEtanol = 5.79;
const precoLitroGasolina = 6.66;
const kmPorLitro = 10;
const distanciaKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoLitroEtanol;
    console.log('Vaalor gasto com Etanol: ', valorGasto.toFixed(2) )
} else {
    const valorGasto = litrosConsumidos * precoLitroGasolina;
    console.log('Valor gasto com Gasolina: ', valorGasto.toFixed(2))
}