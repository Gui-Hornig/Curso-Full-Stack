function  plusMinus ( arr )  { 
    // Escreva seu código aqui 
    const  arrLength  =  arr . length 
    const  PositiveRatios  =  Number (( arr . filter (( item ) = >  item  >  0  ). length   /  arrLength ). toFixed ( 6 )) 
    constnegativeRatios  = Number (( arr . filter (( item ) => item    <  0  ). comprimento  /  arrLength ). toFixed ( 6 )) 
    const  zeroRatios  =  Number (( arr . filter (( item ) =>  item  ===  0  ). length  /  arrLength ). toFixed ( 6 ))
    
    console . log ( PositiveRatios ) 
    console . log ( negativeRatios ) 
    console . log ( zeroRatios ) 
}
//___________________________________________

const n = arr.length;
let posCount = 0;
let negCount = 0;
let zerCount = 0;

for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
    posCount++;
  } 
  posCount++;
 

    posCount 
    else if (arr[i] < 0) {
        negCount++;
      }
      negCount++;
 

    negCount++;

    neg