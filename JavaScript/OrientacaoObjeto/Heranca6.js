function Aula(nome, videoId){
    this.nome = nome
    this.video = videoId
} 

const aula1 = new Aula ('Bem Vindo', 123)
const aula2 = new Aula ('Ate Breve', 456)
console.log (aula1, aula2)

//simular o new

function novo (f, ...params) {
    const obj = {}
    obj.proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Ate breve', 456)
console.log(aula3, aula4)