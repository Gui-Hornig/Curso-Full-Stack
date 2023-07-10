// Funcao em JS e First-Class Object (Citezens)
// Funcao de altar ordem (Higher-order function)

// Criar de forma literal "function fun1() {}" 'Function' depois o Nome da funcao
// "()"" A funcao pode retiornar um valor com 'return' caso nao seja nada definido, por padrao e Undefinid
// Dentro do corpo da funcao existe um bloco "{}" sentencas de codigos agrupadas para ter reuso da funcao
// Bloco e obrigatorio na funcao "{}"

function fun1() {}


// Pode armazenar a function em uma variavel
const fun2 = function () { }

// pode armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto

const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Pode passar funcao como parametro para outra funcao
function run(fun) {
    fun()
}
run( function () { console.log('Executanto...') })