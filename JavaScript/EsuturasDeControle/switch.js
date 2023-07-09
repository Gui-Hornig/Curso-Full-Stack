const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10:                     // Se for 10 ou 9 ela executa essa senteca de codigo
        case 9:                      //   switch e feito para multiplas selecoes a expresao retorna VALOR (9, 1, 30)              
            console.log('Quadro de Honra')
            break // break e importante pois ele intende que finalizou e pode sair sem o Break ele executria todos os codigos abaixo
        case 8:
        case 7: 
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperacao')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado seu Burro!')
            break
        default: 
            console.log('Nota Invalida, digite certo o animal!')
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(11)

