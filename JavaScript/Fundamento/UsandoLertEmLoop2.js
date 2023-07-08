const funcs = []
    for (let i = 0; i <10; i++){
        funcs.push(function(){
            console.log(i)
        })
    }

    funcs [2]()
    funcs [6]() // Uma Funcao de Js e um Clojure 
    funcs [8]() //uma funcao tem consiencia do local que foi definida
