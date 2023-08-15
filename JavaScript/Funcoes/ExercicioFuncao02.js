// 3 - Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta
// e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir paa ler qual a condição de pagamento escolhido e efetuar o cálculo adequado.

// Código condição de pagamento: 

// - A vista débito, recebe 10% de desconto;
// - A vista no dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal da etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

const valorProdutos = 100.00;
const debito = valorProdutos * 0.9;
const dinheiroPix = valorProdutos * 0.85;
const emDuasVezes = valorProdutos;
const acimaDe3vezes = valorProdutos + (valorProdutos * 0.1) ;
// const acimaDe3vezes = valorProduto * 1.1 ;


const formaDePagamentos = debito;

if (formaDePagamentos === debito){
    console.log('Valor total da compra', debito.toFixed(2));
} else if (formaDePagamentos === dinheiroPix){
    console.log('Valor total da compra', dinheiroPix.toFixed(2));  
} else if (formaDePagamentos === emDuasVezes) {
    console.log('Duas vezes sem juros o valor total da compra R$',emDuasVezes.toFixed(2));
} else if (formaDePagamentos === acimaDe3vezes){
    console.log('Três vezes com juros de 10%, valor total da compra R$',acimaDe3vezes.toFixed(2));
}

/// Refatorar utilizando funcao

function aplicarDesconto(valor , desconto){
    return (valor -(valor * (desconto / 100)));
}
function aplicarJuroso(valor, juros){
    return (valor + (valor * (juros / 100)));
}

const valorProduto = 100.00;
const formaDePagamento = 4;

    if (formaDePagamento === 1){
       console.log ('Valor total da compra',aplicarDesconto(valorProduto, 10).toFixed(2))
        } else if (formaDePagamento === 2){
        console.log ('Valor total da compra', aplicarDesconto(valorProduto, 15).toFixed(2));  
    } else if (formaDePagamento === 3) {
        console.log( 'Duas vezes sem juros, valor total da compra R$', valorProduto.toFixed(2));
    } else if (formaDePagamento === 4){
        console.log('Três vezes com juros de 10%, valor total da compra R$', aplicarJuroso(valorProduto, 10).toFixed(2));
    }


    