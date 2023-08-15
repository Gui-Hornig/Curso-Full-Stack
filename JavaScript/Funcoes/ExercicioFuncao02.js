
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
const formaDePagamento = 'debito';

    if (formaDePagamento === 'debito'){
       console.log ('Valor total da compra',aplicarDesconto(valorProduto, 10))
        
    } else if (formaDePagamento === dinheiroPix){
        return { mensagem: 'Valor total da compra', valor: dinheiroPix.toFixed(2)};  
    } else if (formaDePagamento === emDuasVezes) {
        return { mensagem: 'Duas vezes sem juros o valor total da compra R$', valor: emDuasVezes.toFixed(2)};
    } else if (formaDePagamento === acimaDe3vezes){
        return { mensagem: 'Três vezes com juros de 10%, valor total da compra R$', valor: acimaDe3vezes.toFixed(2)};
    }