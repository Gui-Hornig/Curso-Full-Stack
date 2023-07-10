// Closure e o escopo criado quando uma funcao e declarada
// Esse escopo permite a funcao acessar e manipular as variaveis externas a funcao

// Contexto lexico em acao

const x = 'Global'

function fora () {

    const x = 'local'
    function dentro () {
        return x 
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao)