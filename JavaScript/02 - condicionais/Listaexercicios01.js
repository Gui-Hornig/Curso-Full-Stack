// faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade e imprima 
// sua média e sua classificação conforme a tabela abaixo. 

// Méddia = (nota 1 + nota 2 + nota 3 ) / 3

// Classificação:
//  - Média menor que 5, recuprovado
//  - Média entre 5 e 7, recuperação
//  - Média acima de 7, passou de semestre

const notaA = 7;
const notaB = 8;
const notaC = 4;

const mediaAluno = (notaA + notaB + notaC) / 3;


  if (mediaAluno < 5) {
    console.log('Burro! Você REPROVOU DE ANO! Sua média foi:', mediaAluno.toFixed(2));
} else if (mediaAluno >= 5 && mediaAluno <=7 ) {
    console.log('Quase reprova em! Você esta em RECUPERAÇÃO! Sua média foi:', mediaAluno.toFixed(2));
} else {
    console.log('PASSOU! Não fez mais que sua obrigação. Sua média foI:', mediaAluno.toFixed(2));
}

console.log('Iahweh')