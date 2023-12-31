
// Código original: 
// Refatorar O CODIGO PARA UTILIZAR FUNCOES e Objetos.

const peso = 100.5;
const altura = 1.75;
// Math.pow(altura, 2) Utilizando esse biblioteca podemos fazer numeros ao quadradro, cubo etc...
const calculoImc = peso / (altura * altura);

if (calculoImc < 18.5) {
    console.log ('Você está abaixo do peso, seu IMC atual é: ',calculoImc.toFixed(2));
} else if (calculoImc >= 18.5 && calculoImc < 25){
    console.log ('Seu peso está normal, continue cuidando da saúde. IMC atutal é: ', calculoImc.toFixed(2));
} else if (calculoImc >= 25 && calculoImc < 30 ){
    console.log('Cuidado! Você está acima do peso, seu IMC atutal é: ', calculoImc.toFixed(2));
} else if (calculoImc >= 30 && calculoImc <= 40){
    console.log('Para de comer AGORA! Você está obeso, seu IMC atual é: ', calculoImc.toFixed(2));
} else {console.log ('OBESIDADE GRAVE! Você está correndo sérios riscos de saúde, seu IMC atual é: ', calculoImc.toFixed(2))};

// Utilzei um Objeto {} para retornar a mensagem junto com o valor do IMC da pessoa.
// a função classificarImc retorna um objeto contendo uma mensagem e o valor do IMC formatado. 
// O objeto é então armazenado na variável resultadoImc, e a mensagem junto com o valor é exibida no console.log. 
// Isso torna o código mais organizado e legível ao lidar com diferentes partes das informações de saída.



// Código REFATORDO : 
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc (calculoImc) {
    if (calculoImc < 18.5) {
        return  {mensagem: 'Você está abaixo do peso, seu IMC atual é: ', valor: calculoImc.toFixed(2)};
    } else if (calculoImc >= 18.5 && calculoImc < 25){
        return  {mensagem: 'Seu peso está normal, continue cuidando da saúde. IMC atutal é: ', valor: calculoImc.toFixed(2)};
    } else if (calculoImc >= 25 && calculoImc < 30 ){
        return  {mensagem: 'Cuidado! Você está acima do peso, seu IMC atutal é: ', valor: calculoImc.toFixed(2)};
    } else if (calculoImc >= 30 && calculoImc <= 40){
        return  {mensagem: 'Para de comer AGORA! Você está obeso, seu IMC atual é: ', valor: calculoImc.toFixed(2)};
    } else 
        {return {mensagem: 'OBESIDADE GRAVE! Você está correndo sérios riscos de saúde, seu IMC atual é: ', valor: calculoImc.toFixed(2)}
    };
    
}

(function () {
    const peso = 100.5;
    const altura = 1.75;
    
    const calculoImc = calcularImc(peso, altura);
    const resultadoImc = classificarImc(calculoImc);
    
    console.log(resultadoImc.mensagem + resultadoImc.valor) 
})()// Função imediatamente invocada, cria e já executa, quando adicionamos os parenteses ()
// Não precisa nomear a função e ela só pode ser acessada dentro dos parenteses;
