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


// OUTRO EXEMPLO ELSE if. Dessa maneira ele vai executar um de cada vez e parar quando for VERDADEIRO 

const dinheiroDaConta = 0;
const divisivelPor5 = (dinheiroDaConta % 5) ===  0;

if (dinheiroDaConta === 0){
    console.log ('O numero e invalido')
}
else if (divisivelPor5) {
    console.log('SIM')
} else {
    console.log('NAO')
}