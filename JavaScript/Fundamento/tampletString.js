const nome = 'Guilherme';
const concatenacao = 'ola '+ nome + '!';
const templete = `
    Olá
    ${nome}!`;
console.log(concatenacao, templete);

// explessoes...
console.log(` 1 + 1 = ${1+1}`);

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up(`cuidado`)}!`)