{
    {
        {
            {
                 var sera = 'Sera??'
            }
        }
    }
}
console.log(sera) 
// Escopo e ate onde a variavel fica visivel depois de declarada
// Nesse ex. usando a variavel "var" ela fica visivel mesmo fora do bloco {escopo}


// Ex. que NAO fica visivel 

function teste(){
    var local = 123
    console.log(local) // dentro do escopo conseguimos acessar a variavel
}
console.log(local) /* nesse ex nao conseguimos acessar a variavel 
                    * pois ela esta definida dentro do escopo e junto com a funcao
                    *Se tratando de 'var' so tem 2 escopos possiveis ou ela 
                    * e global (disponivel para acessar em todo o sistema) ||
                    * Ou vc cria uma "var" com escopo de funcao \
                    * (so fica disponivel para acessar dentro da funcao)     */
                