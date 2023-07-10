// estrateria 1 para gerar valor padrao 
// ainda muito usada no JS
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1())
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0 , 0  ))


//Estratgia 2, 3 e  para gerar um valor padrao

function soma2 (a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? a : 1
    c = isNaN(c) ? 1 : c 
    return a + b + c
}
console.log (soma2())
console.log (soma2(), soma2(3), soma2(1, 2, 3), soma2(0,0,0))

//Valor padrao do Es2015 forma mais adequada e melhor para escrever  

function soma3( a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log (soma3(), soma3(3), soma3(1, 2, 3), soma3(0,0,0))
