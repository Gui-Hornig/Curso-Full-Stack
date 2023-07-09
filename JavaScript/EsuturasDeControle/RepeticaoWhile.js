// Estruturas indeterminadas de vezes
 function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre ( -1, 10)
    console.log(`Opcao Escolhida foi ${opcao}.`)
}
console.log('ate a proxima!')

// Baseada em uma expressao True ou False que enquanto fo True continua e quando for False ela sai do laço
// E propria para executar laço com uma quantidade indeterminada de repetições