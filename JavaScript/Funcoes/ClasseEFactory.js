// Classe e uma forma diferente de instanciar objetos
// Classe e uma funcao escrito diferente (basicamente)

class Pessoa  {
    constructor (nome) {
       this.nome = nome         
    }
    falar() {
        console.log(`Meu nome e ${this.nome}`) 
    }
}

const p1 = new Pessoa ('Joao')
p1.falar()