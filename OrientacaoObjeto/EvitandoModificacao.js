// Object.preventExtensions

const produto = Object.preventExtensions({
    nome : 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal Nao pode adicionar atributos nem excluir mas pode modificar os atributos do objeto
const pessoa = {nome:  'juliana', idade: 35}
Object.seal (pessoa)
console.log ('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object. freeze = nenhum atrbuto pode ser modificado no objeto.