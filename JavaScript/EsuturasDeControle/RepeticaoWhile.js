// Estruturas indeterminadas de vezes
 function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre ( -1, 10)
    console.log('Opcao Escolhida foi ${opcao}.')
}
console.log('ate a proxima!')