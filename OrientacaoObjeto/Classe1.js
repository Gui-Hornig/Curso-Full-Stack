class Lancamento {
    constructor (nome ='Generico', valor = 0 ){
        this.nome = nome
        this.valor = valor 
    }   
}

class CicloFinanceiro {
    constructor (mes, ano) {
        this.mes = mes
        this.ano = ano
        this.Lancamento = []
    }
}

addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos)
}