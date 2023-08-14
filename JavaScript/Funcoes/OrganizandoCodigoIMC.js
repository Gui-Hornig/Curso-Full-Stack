

// REFATORANDO O CODIGO PARA UTILIZAR FUNCOES




function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc (calculoImc) {
    if (calculoImc < 18.5) {
        return  'Você está abaixo do peso, seu IMC atual é: ',calculoImc.toFixed(2);
    } else if (calculoImc >= 18.5 && calculoImc < 25){
        return  'Seu peso está normal, continue cuidando da saúde. IMC atutal é: ', calculoImc.toFixed(2);
    } else if (calculoImc >= 25 && calculoImc < 30 ){
        return 'Cuidado! Você está acima do peso, seu IMC atutal é: ', calculoImc.toFixed(2);
    } else if (calculoImc >= 30 && calculoImc <= 40){
        return 'Para de comer AGORA! Você está obeso, seu IMC atual é: ', calculoImc.toFixed(2);
    } else 
        {return 'OBESIDADE GRAVE! Você está correndo sérios riscos de saúde, seu IMC atual é: ', calculoImc.toFixed(2)
    };
    
}

const peso = 13.5;
const altura = 1.75;

const calculoImc = calcularImc(peso, altura);
console.log(classificarImc(calculoImc));