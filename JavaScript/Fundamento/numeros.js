const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);

console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));// define a quantidade de casas decimais
console.log(media.toString(2)); // passando o valor "2" para "toString" converte em binario
console.log(typeof media)
console.log(typeof Number) /* Com N maiusculo é ma função
                            * com n minusculo é um tipo de dado quando tem um valor numéricos, 
                            *tanto valor innteiro quanto com ponto flutuante.*/


// ALGUNS CUIDADDOS COM NÚMEROS

console.log( 7 / 0 ) // valor dividido por um número muito pequeno, ele acaba aumentando.
console.log("10" / 2) // porque JS é fracamente tipado ele consegue dividir em outras linguagens (Ex: Java) não seria possível
console.log("Show" * 2)
console.log(0.1 + 0.7)
// console.log(10.toSring()) 
console.log((10.345).toFixed(2))