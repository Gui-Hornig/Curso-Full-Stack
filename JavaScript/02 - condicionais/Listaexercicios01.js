// faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade e imprima 
// sua média e sua classificação conforme a tabela abaixo. 

// Méddia = (nota 1 + nota 2 + nota 3 ) / 3

// Classificação:
//  - Média menor que 5, recuperação
//  - Média entre 5 e 7, recuperação
//  - Média acima de 7, passou de semestre

const notaA = 10
const notaB = 20
const notaC = 20

const mediaAluno = (notaA + notaB + notaC) / 3

if (mediaAluno < 5) {
    console.log ('Recuperacao')
} else if (mediaAluno = 5 || 7) {
    console.log('')
}