// Um pequeno trecho de código que podemos invocar novamente para utilizar novamente.

function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Guilherme');
sayMyName('Natalia');


function quadrado(valor){
    return valor * valor;
}

console.log(quadrado(10));
console.log((quadrado(20) + quadrado(14)) / 2);


function adicionarJuros(valor, percentualJuros) {
    const valorDeJuros = (percentualJuros / 100) * valor;
    return valor + valorDeJuros;
}

console.log(adicionarJuros(100, 10))
console.log(adicionarJuros(1000, 33.33))