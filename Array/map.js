const nums = [1, 2, 3, 4, 5]

//For com proprosito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => +10
const triplo = => * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map 
