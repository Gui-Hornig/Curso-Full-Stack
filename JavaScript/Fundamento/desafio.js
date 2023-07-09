function  plusMinus ( arr )  { 
    // Escreva seu código aqui 
    const  arrLength  =  arr . length 
    const  PositiveRatios  =  Number (( arr . filter (( item ) =>  item  >  0  ). length   /  arrLength ). toFixed ( 6 )) 
    constnegativeRatios  = Number (( arr . filter (( item ) => item    <  0  ). comprimento  /  arrLength ). toFixed ( 6 )) 
    const  zeroRatios  =  Number (( arr . filter (( item ) =>  item  ===  0  ). length  /  arrLength ). toFixed ( 6 ))
    
    console . log ( PositiveRatios ) 
    console . log ( negativeRatios ) 
    console . log ( zeroRatios ) 
}
//___________________________________________