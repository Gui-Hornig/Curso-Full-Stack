/*
1- Crie uma classe para reprentar carros.
Os carros possuem uma marca, uma cor  um gasto medio de combustivel por km rodado.
Crie um metodo que dado a quantidade e opreco do combustivel nos de o valor gasto em reais para realizar este percurso.
*/

let valorCombustiel = 5.66
let KilmetrosRodado = 100

class Carros {
    modelo;
    marca;
    cor;
    gastoPorKm;


    constructor(modelo, marca, cor, gastoPorKm) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    valorTotalPercurso () {
        return  this.gastoPorKm * (KilmetrosRodado * valorCombustiel)
    }
}