 console.log(typeof Object)
 console.log(typeof new Object) //Pode ser Instanciada a partir da paravra reservado "new" a funcao

 const Cliente = function () {}
 console.log(typeof Cliente) // pode criar instancias de funcoes que vc definiu
 console.log(typeof new Cliente)

 class Produto {} // ES 2015 (ES6)  e pode criar instancias a partir de uma classe 
 console.log(typeof Produto)
 console.log(typeof new Produto())