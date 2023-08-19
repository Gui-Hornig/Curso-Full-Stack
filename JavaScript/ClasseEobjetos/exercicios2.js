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
        this.calcularImc = calcularImc = peso / (altura * altura) 
    }

    //  calcularImc () {
    //    return this.peso / (this.altura * this.altura)
    //}
    descrever(){
        console.log(`${this.nome} pesa ${this.peso} e seu IMC e ${this.calcularImc.toFixed(2)}`)
    }
}
const pessoa1 = new MedirImc('Jose', 70, 1.70)
console.log(pessoa1)
/// let imc = console.log(pessoa1.calcularImc().toFixed(2))
console.log(pessoa1.descrever());




