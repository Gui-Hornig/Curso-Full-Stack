
// Classe é a definição do que deve ser o objeto. Tipo um 'Padrão a ser seguido']
// Instancia é a ocorrencia do Objeto

class Humanos {
    nome;
    idade;
    profissao;
    salario;

    descrever() {
        console.log(`Sou ${this.nome} tenho ${this.idade}, minha profissao e ${this.profissao} e ganho ${this.salario} por mes.`);
    }
}

const primeiroHumano = new Humanos();
primeiroHumano.nome = 'Guilherme';
primeiroHumano.idade = '23';
primeiroHumano.profissao = 'Desenvolvedor';
primeiroHumano.salario = 'R$20.000';

const segundoHumano = new Humanos();
segundoHumano.nome = 'Carlos';
segundoHumano.idade = '23';
segundoHumano.profissao = 'Tecnico em Informatica';
segundoHumano.salario = 'R$1.000';

primeiroHumano.descrever();
segundoHumano.descrever();

// Instancia com Constructor 

class humanos2 {
   
    constructor(nome, idade, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.salario = salario;
        this.anoDeNascimento = 2023 - idade;
    }

        
    descrever() {
        console.log(`Sou ${this.nome} tenho ${this.idade}, minha profissao e ${this.profissao} e ganho ${this.salario} por mes. Nasci no ano ${this.anoDeNascimento}`)
    }


};

const humano1 = new humanos2('Guilherme', 23, 'Desenvolvedor', 'R$15.000.00');
const humano3 = new humanos2('Vitor', 999, 'agricultor', 'R$2.000.00')

console.log(humano1)
console.log(humano3)


humano1.descrever()
humano3.descrever()