// Usando a notacao Literal

const obj1 = {}
console.log(obj1)

// Object em Js

console.log (typeof Object, typeof new Object)
const Obj2 = new Object
console.log (Obj2)

// Funcoes construtoras 

function Produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco* (1 - desc)
    }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Funcao Factory

function criarFuncionario( nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario () {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.Create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma funcao famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)