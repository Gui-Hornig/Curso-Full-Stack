const valores = [7.7 , 8.9 , 6.3 , 9.2];
console.log(valores [0], valores[3]);
console.log(valores[4]);

valores [10] = 10; // o JS completa automaticamente dos arrays com espacos vazios
console.log(valores); 
 
valores [4] = 10 ; // os arrays dos JS sao maleaveis 
console.log(valores)
console.log(valores [4]);

console.log(valores.length); // retorna a quantidade de valores do array

valores.push({id:3}, false, null, 'teste');
console.log(valores);



