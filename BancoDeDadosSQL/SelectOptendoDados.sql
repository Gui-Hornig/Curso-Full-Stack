select * from cursos /*Como o operador 'LIKE' 'P%' voce pode selecionar todos os cursos que comeca com a letra P*/
where nome like 'P%'; 


select * from cursos
where nome like '%A'; /*a posicao do '%' altera o que o SQL retorna*/ 
 where nome like '%A'; /*Seleciona todos os registros que começam com A */
 where nome like 'PH%P'; /*Seleciona registro que começam com PH e terna com P*/ 