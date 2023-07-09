Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperacao') 
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else{
        console.log ('De tamanha burrice nem NOTA vc tem! ')
    }
    
    console.log('FIM')

}
imprimirResultado(10)
imprimirResultado(8.99)
imprimirResultado(6.99)
imprimirResultado(3.99)
imprimirResultado(-1)