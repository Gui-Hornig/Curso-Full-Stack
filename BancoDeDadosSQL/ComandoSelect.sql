use cadastro;
select*from gafanhotos;
select*from cursos;

select * from cursos  /*Seleciona todas as colunas  */
order by nome desc; /*Organiza em ordem alfabetica (caso adicione o "DESC" ele ordena em ordem alfabetica de baixo para cima)*/

/*Seleciona apenas as descritas */
/*Caso mude a ordem dos nomes o SQL retorna como vc descreveu*/
select nome, carga, ano from cursos
order by nome;


select nome, carga, ano from cursos
order by ano, nome; /*ordena primeiro por ANO e depois por NOME(alfabetico) */

/*Filtra todas as LINHAS*/

select * from cursos /*Selecione todos os campos da tabela cursos onde o ano seja igual a 2016 ordenado por nome*/
where ano = '2016'
order by nome;

/*Selecione todas as colunas (nome, descricao, ano) da tabela (cursos) onde o (ano) seja igual ou menor que 2015
* e ordene por nome (alfabetico)
 */
select nome, descricao, ano from cursos
where ano <= 2015
order by nome;


/* selecione todas as colunas ta tabela cursos onde o ano esteja entre 2014 e 2016, ordene por (ano e nome)
 */

 select nome, ano from cursos
 where ano between 2014 and 2016
 ordem by ano desc,  nome;