function Carro(velocidadeMaxima = 200, delta = 5) {
    //Atributo Privado
    let velocidadeAtual = 0

    // Metodo Publico
    this.acelerar - function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Metodo Publico

}
