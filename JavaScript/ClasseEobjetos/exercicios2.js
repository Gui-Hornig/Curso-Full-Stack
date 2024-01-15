/*
2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos NOME, PESO, ALTURA.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada JOSÉ que tenha 70kg de peso e 1.75 de altura.
    Peça ao José para dizer o valor do seu IMC;
*/ 

class MedirImc {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura, calcularImc){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        // this.calcularImc = calcularImc = peso / (altura * altura);
    }

    //  calcularImc () {
    //    return this.peso / (this.altura * this.altura)
    //}
    // descrever(){
    //     console.log(`${this.nome} pesa ${this.peso} e seu IMC e ${this.calcularImc.toFixed(2)}.`)
    // };

    calcularImc(){ 
        return this.peso / (this.altura * this.altura)};

    classificarImc(){
        const calculoImc = this.calcularImc();

        if (calculoImc < 18.5) {
            return ('Você está abaixo do peso, seu IMC atual é: ',calculoImc.toFixed(2));
        } else if (calculoImc >= 18.5 && calculoImc < 25){
            return ('Seu peso está normal, continue cuidando da saúde. IMC atutal é: ', calculoImc.toFixed(2));
        } else if (calculoImc >= 25 && calculoImc < 30 ){
            return('Cuidado! Você está acima do peso, seu IMC atutal é: ', calculoImc.toFixed(2));
        } else if (calculoImc >= 30 && calculoImc <= 40){
            return('Para de comer AGORA! Você está obeso, seu IMC atual é: ', calculoImc.toFixed(2));
        } else {return ('OBESIDADE GRAVE! Você está correndo sérios riscos de saúde, seu IMC atual é: ', calculoImc.toFixed(2))};

    }

};
// const pessoa1 = new MedirImc('Jose', 70, 1.7);
// console.log(pessoa1);
// /// let imc = console.log(pessoa1.calcularImc().toFixed(2))
// console.log(pessoa1.descrever()); 

const pessoa2 = new MedirImc('Guilherme', 80, 1.8);
console.log(pessoa2.calcularImc());