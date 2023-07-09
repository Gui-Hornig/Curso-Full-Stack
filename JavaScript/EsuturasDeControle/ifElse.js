const imprimirResultado = function (nota) {
    if (nota >= 7){
        console.log ('Aprovado!')
    } else {
        console.log ('Reprovado! Burro!')
    }
} 

imprimirResultado(10)
imprimirResultado(6)        // Tomar cuidado deveria ser ERRO
imprimirResultado('Epa!') // Por Js ser fracamente tipado ele vai jogar "Epa" em nota e compara se e >= 7, 
                         // Como e uma String o resultato e Falso e ele imprime 'Reprovado! Burro!' no console.
                         