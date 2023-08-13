// 2 - O IMC - indice de massa corporal é um criterio de organização mundial de saude para dar uma indicação
// sobre a condição de peso de uma pessoa adulta.

// Formula do IMC : 

// IMC = peso / (altura * altura)

// Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo. 

// IMC em adultos condições: 

// - Abaixo de 18.5 = Abaixo do peso;
// - Entre 18.5 e 25 = Peso normal;
// - Entre 25 e 30 = Acima do peso;
// - Entre 30 e 40 = Obeso ;
// - Acima de 40 = Obesidade Grave;


const peso = 55.5 
const altura = 1.75

const calculoImc = peso / (altura * altura)

console.log(calculoImc.toFixed(2))