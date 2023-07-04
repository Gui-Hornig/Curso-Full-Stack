{   // console.log(7.9); valor literal 

    let nome = ("Caneta");
    const preco = 6.4;
    const quantidade = 10;
    const imposto = 1.5;
    const precoFinal = preco + imposto

    nome = "nome da coisa"

    console.log(nome);
    console.log(quantidade); 
    console.log(preco);
    console.log(imposto);
    console.log(precoFinal); }

{//sempre escolher bons preços e nomes claros as pastas e variáveis
    let preco = 19.90;
    let desconto = 0.4;

    console.log(19.9 * 0.6);
    console.log(preco * (1 - desconto)); //codigo mais limpo e claro

    let precoComDesconto = preco * (1 - desconto);
    console.log(precoComDesconto);



    let nome = "caderno";
    let categoria = "Papelaria"; 
    console.log("Produto: "+ nome 
                + ", Categoria: " + categoria  
                + ", Preço: " + preco 
                + ", Desconto: " + desconto); 
}

 // Tipos : Numeriocos, boolean e string
let salario = 4578.32;
console.log(typeof salario); //mostra o tipo 

let estaChovendo = true // ou  false
console.log(typeof estaChovendo)

console.log(typeof "Teste")

////////// Alterar o valor de variavel ///////////////

// cons = 2; "variavel" constante nao pode ser mudado melhor para usar seguranca 

let a = 3;

a = a + 10;

console.log(a);


//////////////// Desafio ///////////////

const PI = Math.PI;
let raio = 10;
let area = PI * raio * raio;
console.log( "Valor da area é:", area + "m2");



//////////////// Desafio 2 troca de variaveis///////////////

let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp;

console.log(a ,"e", b );