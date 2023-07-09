// '||' ou em Js uma coisa OU outra 
// Operacao do tipo e '&&' todos os operadores precisao ser TRUE para ele ser Verdadeiro
// operador ou exclusivo '!=' diferente os operadores precisao ser diferentes para dar True, se for os dois V V ou F F o resultado e FALSE
// negacao logica '!'  !V -> F | !F -> V
function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operar  unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } 
    // Chave valor //Forma mais reduzida e inteligente para criar OBJETO, o nome da variavel e o valor sera o resultado dela
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))