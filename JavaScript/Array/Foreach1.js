const aprovados = ['Agatha', 'aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array, x) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(x, array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log (aprovados)
aprovados.forEach(exibirAprovados)