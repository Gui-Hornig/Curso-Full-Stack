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