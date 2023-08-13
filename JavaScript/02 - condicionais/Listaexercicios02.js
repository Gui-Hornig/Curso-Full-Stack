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


const peso = 66.5 
const altura = 1.75

const calculoImc = peso / (altura * altura)

if (calculoImc < 18.5) {
    console.log ('Você está abaixo do peso, seu IMC atual é: ',calculoImc.toFixed(2))
} else if (calculoImc >= 18.5 && calculoImc < 25){
    console.log ('Seu peso está normal, continue cuidando da saúde. IMC atutal é: ', calculoImc.toFixed(2))
} else if (calculoImc >= 25 && calculoImc < 30 ){
    console.log('Cuidado! Você está acima do peso, seu IMC atutal é: ', calculoImc.toFixed(2))
}