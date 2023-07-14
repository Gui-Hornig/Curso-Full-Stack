const alunos = [
    {nome: 'joao', notas: 7.9},
    {nome: 'Maria', notas: 9.2}
]

//Imperatvo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {

    total1 += alunos[i].notas
}

console.log(total1 / alunos.length)

//Declartiva

const  getNota = aluno => aluno.nota
const soma = (total, atual) => total +atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total1/ alunos.length)