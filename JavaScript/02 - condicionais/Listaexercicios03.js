// 3 - Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta
// e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir paa ler qual a condição de pagamento escolhido e efetuar o cálculo adequado.

// Código condição de pagamento: 

// - A vista débito, recebe 10% de desconto;
// - A vista no dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal da etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

const valorProduto = 100.00;
const debito = valorProduto * 0.9;
const dinheiroPix = valorProduto * 0.85;
const emDuasVezes = valorProduto;
const acimaDe3vezes = valorProduto * 10%;


const formaDePagamento = emDuasVezes

if (formaDePagamento === debito){
    console.log('Valor total a pagar', debito.toFixed(2) )
} else if (formaDePagamento === dinheiroPix){
    console.log('Valor total a pagar', dinheiroPix.toFixed(2))  
} else if (formaDePagamento === emDuasVezes) {
    console.log('Duas vezes sem juros o valor total R$',formaDePagamento.toFixed(2))
} else if () {}
