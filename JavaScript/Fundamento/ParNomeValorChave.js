// par nome/valor
const saudacao = 'opa' //Contexto LEXICO 1 (onde foi definida)

function exec(){
    const saudacao = 'falaaa!' // Contexto LEXICO 2
    return saudacao
}

//Objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    Idade: 21,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)