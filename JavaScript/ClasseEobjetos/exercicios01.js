/*
1- Crie uma classe para reprentar carros.
Os carros possuem uma marca, uma cor  um gasto medio de combustivel por km rodado.
Crie um metodo que dado a quantidade e opreco do combustivel nos de o valor gasto em reais para realizar este percurso.
*/

let valorCombustiel = 5.66
let KilmetrosRodado = 101

class Carros {

    constructor(modelo, marca, cor, gastoPorKm) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
        this.valorTotalPercurso = (valorCombustiel * (KilmetrosRodado / gastoPorKm).toFixed(2)) 
    }

    descricao() {
        console.log (`O carro ${this.modelo} da marca ${this.marca} tem a cor ${this.cor} e gasta R$ ${this.valorTotalPercurso.toFixed(2)} de gasolina em uma rota de`, KilmetrosRodado,`km rodados.`) 
    }

}

let carro1 = new Carros('Uno', 'Fiat', 'Preto', 10);
let carro2 = new Carros('ferrari f40', 'Ferrari', 'vermelha', 2)
// console.log(nomeDoCarro)
carro1.descricao()
carro2.descricao()

