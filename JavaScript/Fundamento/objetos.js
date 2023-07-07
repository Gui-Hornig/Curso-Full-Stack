const prod1 = {} // criacao  de forma literal 
prod1.nome = 'celular ultra mega' // atribuir valores dinamicamente
prod1.preco = 4998.90
prod1.desconto = '%10'

console.log(prod1)
// objeto e uma colecao pares chave(identificado) e valor(valor ou funcao de cada identificador)  pode tambem ter objeto aninhado
// criando objeto de forma literal e ja atribuindo os valores
const prod2 = { 
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        tecido:'Malha algodao',

    } 
}