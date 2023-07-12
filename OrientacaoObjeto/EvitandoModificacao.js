// Object.preventExtensions

const produto = Object.preventExtensions({
    nome : 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)