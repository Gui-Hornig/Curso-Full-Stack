function tratarErroELancar(erro){
    // throw new Error('Codigo Bugado')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado (obj) {
    try{ 
    console.log (obj.name.toUpperCaase() + '!!!')
    } catch (e){
       tratarErroELancar(e) 
    }
}
const obj = { nome:'Roberto'}
imprimirNomeGritado(obj)

// 'try' e um bloco de codigo que colocamos em codigos que possivelmente podem gerar erro.
// Caso gere esse erro "esperado" o  codigo cai para o bloco 'cath', assim vc pode exibr uma msg ao usuario
// nao mostre para o usuario detalhes de infra, codigos, msg gigantes 
// sempre mosrar uma msg generica de erro ou ate gerar um resh