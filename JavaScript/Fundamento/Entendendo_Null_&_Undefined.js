
const a = {name:'teste'} // criou um objeto com atributo 
console.log(a)

const b = a // pegando o valor de A e atribuindo para B. O que acoantece? 
// A variavel A nao tem o conteudo do objeto ( {name:'teste'}  ) ela tem o endereco apontando para o objeto.
// Quando faz a atribuicao "const b = a" vc passa o endereco da memoria para a variavel "B"
// Assim elas passam a apontar para o mesmo endereco na memoria de tal farma que alterando uma altera as 2 EX:
b.name = 'opa'
console.log(a)
// as duas estao com a mesma referencia do objeto na memoria
// outros EXs: 

let c = 3
let d = c
d++ // incrementa uma uinidade ao valor da variavel 'D'
console.log(d)
console.log(c)





//___________________________________________________________________

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
console.log(produto)

produto.preco = null // sem preco