use cadastro;
select*from gafanhotos;
select*from cursos;

select * from cursos  /*Seleciona todas as colunas  */
order by nome desc; /*Organiza em ordem alfabetica (caso adicione o "DESC" ele ordena em ordem alfabetica de baixo para cima)*/

/*Seleciona apenas as descritas */
/*Caso mude a ordem dos nomes o SQL retorna como vc descreveu*/
select nome, carga, ano from cursos
order by nome;