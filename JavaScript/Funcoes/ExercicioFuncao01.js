function escreveSeuNome(nome, cargo) {
    console.log('Olá! Meu nome é '+ nome +' Sou '+ cargo +' a 3 anos.')
}
escreveSeuNome('Guilherme.', 'engenheiro de Software')


// Funcao que fverifica se o usuario e maior de 18 ano


function verificarIdade(idade) {
    if (idade >= 18){
        console.log ('Parabens! Ja pode tirar a carteira pois voce tem', idade, 'anos e ja e o suficiente')
    } else {
        console.log ('Calma! Ainda falta',  18 - maiorDeIdade, 'anos para completar a maioridade' )
    }
}
verificarIdade(18)