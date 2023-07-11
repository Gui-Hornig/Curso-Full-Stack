// pessoa -> endereco de memoria -> {...}

const pessoa = {node: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> outro endereco -> {...}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // congelar o Objeto, nao consegue mais modificar/ Torna Object constante

pessoa.nome = 'Maria'
pessoa.end = 'Rua Abc'
delete pessoa.nome 

console.log(pessoa.nome)
console.log(pessoa)