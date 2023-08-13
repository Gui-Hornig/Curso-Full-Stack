// faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade e imprima 
// sua média e sua classificação conforme a tabela abaixo. 

// Méddia = (nota 1 + nota 2 + nota 3 ) / 3

// Classificação:
//  - Média menor que 5, recuperação
//  - Média entre 5 e 7, recuperação
//  - Média acima de 7, passou de semestre

const notaA = 20;
const notaB = 2;
const notaC = 6;

const mediaAluno = (notaA + notaB + notaC) / 3;


  if (mediaAluno <= 5) {
    console.log('Reprovou');
} else if (mediaAluno >= 5 && mediaAluno < 7 ) {
    console.log('Recuperacao');
} else if (mediaAluno >= 8 ){
    console.log('Passou de Ano');
}