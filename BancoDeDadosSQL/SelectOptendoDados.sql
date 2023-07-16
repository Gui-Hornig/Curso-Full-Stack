select * from cursos /*Como o operador 'LIKE' 'P%' voce pode selecionar todos os cursos que comeca com a letra P*/
where nome like 'P%'; 


select * from cursos
where nome like '%A'; /*a posicao do '%' altera o que o SQL retorna*/ 
 
 