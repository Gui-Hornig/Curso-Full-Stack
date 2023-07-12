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
Object.seal(pessoa)