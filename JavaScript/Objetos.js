const valor = {
    nome: 'Guilherme',
    idade: 23
};

console.log(valor.nome);
console.log(valor.idade);
console.log(valor);


valor.altura = 1.75;
console.log(valor);

delete valor.idade;

console.log(valor);


// atribuindo uma funcao ao objeto

const humanos = {
    nome: 'Guilherme',
    idade: 24,
    profissao: 'Engenheiro de Software',
    descrever: function (){
        console.log(`Olá! Meu nome é ${this.nome} tenho ${this.idade} e atualmente sou ${this.profissao}.`)
    }
};
humanos.descrever(); 

humanos.nome = 'Marcos';

humanos.descrever();

humanos.descrever = function () {
    console.log(`Ola! Eu sou o  ${this.nome}.`);
}

humanos.descrever()

// acessando dinamicamente os valores do objeto

const atributo = 'idade'