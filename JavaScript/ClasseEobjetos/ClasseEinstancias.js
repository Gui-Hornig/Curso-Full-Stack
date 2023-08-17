class Humanos {
    nome;
    idade;
    profissao;
    salario;

    descrever() {
        console.log(`Sou ${this.nome} tennho ${this.idade}, minha profissao e 
        ${this.profissao} e ganho ${this.salario} por mes.`);
    }
}

const primeiroHumano = new Humanos();
primeiroHumano.nome = 'Guilherme';
primeiroHumano.idade = '23';
primeiroHumano.profissao = 'Desenvolvedor';
