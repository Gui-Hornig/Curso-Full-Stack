class humanos2 {
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
