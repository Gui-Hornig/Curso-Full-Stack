// Opradores ternarios sao dividos em 3 expressoes, PRIMEIRA parte e uma expressao relacional se for TRUE ela retorna EX. 'Aprovado' se for falso, retona Ex.'Reprovado'

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(7))
console.log(resultado(6))