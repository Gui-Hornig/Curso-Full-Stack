// traducao seria "Ica ou jogar para cima" 
// Faz exatamente isso no codigo 

 console.log('a=', a) // declarada com "var" a variave sofre esse efeito de ser jogada para cima pelo interpretador
 var a = 2  
 console.log('a=', a)

 function teste(){
    console.log('a=', a) // declarada com "var" a variave sofre esse efeito de ser jogada para cima pelo interpretador
    var a = 2  
    console.log('a=', a)
 }
console.log(a)

//Nao faz sentido fazer isso pois o interpretador faz algumas manipulacoes 
//SEMPRE declare as variaveis antes ou dentro don seu respectivo escopo


console.log('a=', a) // Esse efeito de içamento nao ocorre declarando como "Let"
 let a = 2  
 console.log('a=', a)