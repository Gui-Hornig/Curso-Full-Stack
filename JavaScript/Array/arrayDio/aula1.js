

const alunos = ['Joao', 'Vitor', 'gui', 'natalia']

alunos.push ('rennan')// Adiciona algo a lista

alunos[5] = 'Carlos'
console.log (alunos)

const calc = ['1', '2', '3']
console.log(calc)
console.log(calc.pop()) // Remove o ultimo da da posicao
console.log(calc)

console.log(calc.shift()) // Remove o Primeiro da posicao

console.log(calc)





const nome = 'Guilherme veroneze Mendes';

for(let i = 0; i < nome.length; i++){
    console.log(nome[i])
}

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra)
    
}




const notas = []

notas.push(5)
notas.push(7)
notas.push(8)
notas.push(2)
notas.push(5)
notas.push(8)
notas.push(8)

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;

}
const media = soma / notas.length;
console.log(media);