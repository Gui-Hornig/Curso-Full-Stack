// pessoa -> endereco de memoria -> {...}

const pessoa = {node: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> outro endereco -> {...}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa)