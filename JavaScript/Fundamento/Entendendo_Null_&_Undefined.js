let valor; // nao iniciada
console.log(valor);

valor = null // ausencia de valor 
console.log(valor);
//console.log(valor.toString()) // ERRO!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto. preco = 3.5;
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco 