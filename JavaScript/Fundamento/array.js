const valores = [7.7 , 8.9 , 6.3 , 9.2];
console.log(valores [0], valores[3]);
console.log(valores[4]); // ler valores do array

valores [10] = 10; // o JS completa automaticamente dos arrays com espacos vazios
console.log(valores); 
 
valores [4] = 10 ; // os arrays dos JS sao maleaveis  pode ser alterado ou adicionar 
console.log(valores)
console.log(valores [4]);

console.log(valores.length); // retorna a quantidade de valores do array

valores.push({id:3}, false, null, 'teste');  // o idieal e ter um array para cada tipo de dados
console.log(valores);

console.log(valores.pop()); // retorna retira ultimo valor do array
delete valores [0]; // deleta o valor do array
delete valores [1]; // deleta o valor do array
console.log(valores);

console.log(typeof valores);

