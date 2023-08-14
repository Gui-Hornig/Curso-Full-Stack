
const peso = 123.5;
const altura = 1.75;
// Math.pow(altura, 2) Utilizando esse biblioteca podemos fazer numeros ao quadradro, cubo etc...
const calculoImc = peso / (altura * altura);



// REFATORANDO O CODIGO PARA UTILIZAR FUNCOES

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc (calculoImc) {
    if (calculoImc < 18.5) {
        console.log ('Você está abaixo do peso, seu IMC atual é: ',calculoImc.toFixed(2));
    } else if (calculoImc >= 18.5 && calculoImc < 25){
        console.log ('Seu peso está normal, continue cuidando da saúde. IMC atutal é: ', calculoImc.toFixed(2));
    } else if (calculoImc >= 25 && calculoImc < 30 ){
        console.log('Cuidado! Você está acima do peso, seu IMC atutal é: ', calculoImc.toFixed(2));
    } else if (calculoImc >= 30 && calculoImc <= 40){
        console.log('Para de comer AGORA! Você está obeso, seu IMC atual é: ', calculoImc.toFixed(2));
    } else {console.log ('OBESIDADE GRAVE! Você está correndo sérios riscos de saúde, seu IMC atual é: ', calculoImc.toFixed(2))};
    
}