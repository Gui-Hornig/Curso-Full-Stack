// Novo  recuso do ES2015

const pessoa = {
    nome : 'Ana',
    idade: 5,
    endereco: {
        rua: 'Rua ABC',
        numero: 1000,
        cep:830201,
        complemento: {
            Ap: 12
        }
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log (n, i)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const {rua: r, cep: c, Ap:ap } = pessoa
console.log(r, c, ap)