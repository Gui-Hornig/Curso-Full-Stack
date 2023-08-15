function escreveSeuNome(nome, cargo) {
    return nome + cargo
    //('Olá! Meu nome é '+ nome +' Sou '+ cargo +' a 3 anos.')
}
;; // escreveSeuNome('Guilherme')


// Funcao que fverifica se o usuario e maior de 18 ano


function verificarIdade(idade) {
    if (idade >= 18){
        console.log ('Parabens, '+ escreveSeuNome('Guilherme','') + '! Ja pode tirar a carteira pois voce tem' + idade + 'anos e ja e o suficiente.' +  escreveSeuNome('', 'cargo'));
    } else {
        console.log ('Calma! Falta apenas',  18 - idade, 'anos para completar a maioridade' );
    }
}
verificarIdade(18, escreveSeuNome());


