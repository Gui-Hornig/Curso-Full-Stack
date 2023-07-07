 'use estrito' ;

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function plusMinus(arr) {
    let  arrLength  =  arr . comprimento ; 
   if ( arrLength  >  0 ){ 
       let  [ pos ,  neg ,  zer  ]  =  [ 0 , 0 , 0 ]; 
       for ( let  i = 0 ; i < arrLength ; i ++ ){ 
           if ( Number ( arr [ i ])  >  0 ){ 
               pos ++; 
           } else  if ( Número ( arr [ i ])  <  0  ) { 
               neg ++ ; 
           } else  if ( Número ( arr [ i ])  ==  0 ){ 
               zer ++ ; 
           } 
       } 
       console . log (( pos / arrLength ). toFixed ( 6 )) 
   } else { 
       console . log (( neg / arrLength ).toFixed ( 6 )) 
       console . log (( zer / arrLength ). toFixed ( 6 )) 
       console . log ( ' A entrada  não é  válida ' ); }
}
function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}