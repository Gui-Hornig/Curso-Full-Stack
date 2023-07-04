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
    console.log(nome + " " +  categoria); //Concatenando
}