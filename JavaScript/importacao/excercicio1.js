// Uma sala conte 5 alunos e para cada aluno foi sortedo um numero de 1 - 100.
// Faca um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

// Dados de Entrada:

/*
5
50
10
98
23

Saida : 
98
*/

const {gets, print } = require('./funcoes-auxialiares')

const numerosSorteado = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteado.push(numerosSorteado)
}

print(numerosSorteado);


