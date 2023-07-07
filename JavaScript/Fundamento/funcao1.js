

// Funcao e um {bloco}trecho e codigo que foi dado um nome e pode reutilizar em algum momento, uma nova chamada

//Funcao sem retorno
function imprimirSoma (a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3);
imprimirSoma(2); // Js aceita isso outras linguagens nao 
imprimirSoma(2 ,10, 4, 5, 6, 6, 7) // Js aceita passar mais parametro ou nao passar, ja outras linguagens nao aceitam.

// Funcao com retorno

function soma(a, b= 1){
    return a + b
}
console.log(soma (2, 3))
console.log(soma(2))
console.log(soma())