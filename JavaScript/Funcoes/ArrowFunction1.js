let dobro = function (a) {
    return 2 * a
}
// Rescrevendo a funcao mais reduzida
dobro = (a) => {
    return 2 * a
}
// Reescrevendo, tirando os () caso tenha um unico parametro e pode tirar as {} vc tem um retorno implicita, funcoes com 1 linha
dobro = a => 2 * a
console.log(dobro(3))