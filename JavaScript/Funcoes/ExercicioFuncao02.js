
// if (formaDePagamento === debito){
//     console.log('Valor total da compra', debito.toFixed(2));
// } else if (formaDePagamento === dinheiroPix){
//     console.log('Valor total da compra', dinheiroPix.toFixed(2));  
// } else if (formaDePagamento === emDuasVezes) {
//     console.log('Duas vezes sem juros o valor total da compra R$',emDuasVezes.toFixed(2));
// } else if (formaDePagamento === acimaDe3vezes){
//     console.log('Três vezes com juros de 10%, valor total da compra R$',acimaDe3vezes.toFixed(2));
// }


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