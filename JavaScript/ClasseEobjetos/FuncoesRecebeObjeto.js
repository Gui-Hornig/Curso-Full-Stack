class Humanos {
    nome;
    idade;
    profissao;
    salario;

    constructor(nome, idade, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.salario = salario;
        this.anoDeNascimento = 2023 - idade;
    }

        
    descrever() {
        console.log(`Sou ${this.nome} tenho ${this.idade}, minha profissao e ${this.profissao} e ganho ${this.salario} por mes. Nasci no ano ${this.anoDeNascimento}.`)
    }


};

function compararIdades(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}.`)
    } else if (pessoa1.idade > pessoa2.idade){
        console.log(`${pessoa2.nome} é mais velho(a) que ${pessoa1.nome}.`)
    } else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade.`)
    }
};

const humano1 = new Humanos('Vitor', 23);
const humano2 = new Humanos('Guilherme', 23)

compararIdades(humano1, humano2)