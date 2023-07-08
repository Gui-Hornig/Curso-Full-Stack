let numero = 1
{
        let numero = 2 
        console.log('Dentro =', numero)
}
console.log ('fora =', numero)

/*Nesse ex. "Let" respeita os blocos de codigos {}
*Primeiro verifica se tem a variavel dentro do escopo
*caso nao tenha ela verifica fora do escopo.
*Variavel do tipo 'let' tem escopo global, funcao e bloco 
*Variavel do tipo 'var' tm escopo global e funcao
* Ou seja de preferencia sempre utilizar `Let` ou `const` caso nao precise alterar o valor da variavel 
*/

