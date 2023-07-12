// Cadeia de prootipos (prototype chain)

Object.prototype.attr0 = '0'
const avo = {attr1 : 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__photo__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const = carro = {
    velAtual: 0,
    velMax: 200,
    acelearMaris(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return  `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    mdello: 'F40',
    velMax: 324 // Shadowing (sombreamento)
}