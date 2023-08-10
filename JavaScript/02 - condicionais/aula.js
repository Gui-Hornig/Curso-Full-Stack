// RESTO DA DIVISAO "%"

const numero = 10;

const numeroPar = (numero % 2) === 0;

console.log(numeroPar);


// If else


const idade = 0;
const verdadeiroEfalso = (idade % 2) === 0;
console.log(verdadeiroEfalso)

if (verdadeiroEfalso) {
    console.log('Par')
} else {
    console.log('impar')
}


// OUTRO EXEMPLO IF e ELSE 

const dinheiroDaConta = 10;
const divisivelPor5 = (dinheiroDaConta % 5) ===  0;

if (divisivelPor5) {
    console.log('SIM')
} else {
    console.log('NAO')
}