/*
1- Crie uma classe para reprentar carros.
Os carros possuem uma marca, uma cor  um gasto medio de combustivel por km rodado.
Crie um metodo que dado a quantidade e opreco do combustivel nos de o valor gasto em reais para realizar este percurso.
*/

let valorCombustiel = 5
let KilmetrosRodado = 70

class Carros {
   //Sempre que uma informação for obrgatória, cria um constructor 
    constructor(modelo, marca, cor, gastoPorKm) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
        this.valorTotalPercurso = (valorCombustiel * (KilmetrosRodado / gastoPorKm).toFixed(2)); 
    }

    descricao() {
        console.log (`O carro ${this.modelo} da marca ${this.marca} tem a cor ${this.cor} e gasta R$ ${this.valorTotalPercurso.toFixed(2)} de gasolina em uma rota de`, KilmetrosRodado,`km rodados, pois ele faz ${this.gastoPorKm}km por litro de combustivel.`) 
    }

}

let carro1 = new Carros('Uno', 'Fiat', 'Preto', 12);
let carro2 = new Carros('ferrari f40', 'Ferrari', 'vermelha', 2);
let carro3 = new Carros('Sandero', 'Renoult', 'branca', 20);
console.log(carro1, carro2, carro3);
carro1.descricao();
carro2.descricao();
carro3.descricao();

// outra maneira de solucionar 

