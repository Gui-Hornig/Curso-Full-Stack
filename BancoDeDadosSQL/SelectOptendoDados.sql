select * from cursos /*Como o operador 'LIKE' 'P%' voce pode selecionar todos os cursos que comeca com a letra P*/
where nome like 'P%'; 


select * from cursos
where nome like '%A'; /*a posicao do '%' altera o que o SQL retorna*/
where nome like '%A'; /*Seleciona todos os registros que começam com A */
where nome like 'PH%P'; /*Seleciona registro que começam com PH e terna com P*/
where nome like 'PH%P_'; /*Utilizando o '_' vc exige que tenha algum caractere (qualquer)no final*/
where nome like '%silva%'; /*pesquisa no banco de dados qualquer pessoa que tenha SILVA no nome*/