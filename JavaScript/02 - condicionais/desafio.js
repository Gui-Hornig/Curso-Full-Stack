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
const kmPorLitro = 12;
const distanciaKm = 1580;

// const gastoViagem = (distanciaKm / kmPorLitro) * precoLitroEtanol || precoLitroGasolina;
// console.log(gastoViagem.toFixed(2)); // O toFixed Converte o valor em texto 

function totalViagem () {
    (distanciaKm / kmPorLitro) * precoLitroEtanol || precoLitroGasolina
    if (precoLitroEtanol){
        console.log('Consumo total com Alcoon:'.toFixed(2))
    }
    
}console.log(precoLitroEtanol)