 //Armazemndo uma funcao na variavel

 const imprimirSoma = function (a, b) {
    console.log(a + b)

    imprimirSoma(2, 3)
 }

 //Armazenando uma funcao Arrow em uma variavel

 const soma = (a, b) => {   // funcao COM {} podem excutar varias sentencas de codigo
    return a + b
 }
 console.log(soma(2, 3))

 // Retorno Implicito

 const subtracao = (a, b) => a - b     // funcao SEM os {} executam apenas uma lihha de codigo
 console.log(subtracao(2, 3))

