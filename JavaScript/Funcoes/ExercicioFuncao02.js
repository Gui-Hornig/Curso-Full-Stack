const valorProduto = 100.00;
const debito = valorProduto * 0.9;
const dinheiroPix = valorProduto * 0.85;
const emDuasVezes = valorProduto;
const acimaDe3vezes = valorProduto + (valorProduto * 0.1) ;
// const acimaDe3vezes = valorProduto * 1.1 ;


const formaDePagamento = acimaDe3vezes;

if (formaDePagamento === debito){
    console.log('Valor total da compra', debito.toFixed(2));
} else if (formaDePagamento === dinheiroPix){
    console.log('Valor total da compra', dinheiroPix.toFixed(2));  
} else if (formaDePagamento === emDuasVezes) {
    console.log('Duas vezes sem juros o valor total da compra R$',emDuasVezes.toFixed(2));
} else if (formaDePagamento === acimaDe3vezes){
    console.log('Três vezes com juros de 10%, valor total da compra R$',acimaDe3vezes.toFixed(2));
}


