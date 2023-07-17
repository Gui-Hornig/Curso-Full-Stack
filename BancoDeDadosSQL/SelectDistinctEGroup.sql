  /*Agrupa e conta quantos registros tem em cada coluna*/
  select totaulas, count(*) from cursos
 group by totaulas
 order by totaulas;

/*Agrupando com 'where'*/

select * from cursos where totaulas > 30;
select carga, count(nome) from cursos where totaulas = 30 group by carga;

/*Selecionando os anos da tabela de curso, onde (where) o 'totaulas' seja maior que 30, vou agrupar(group by) a selecao por ano
dentro do agrupamento so vai mostrar quem tem (having) o ano maior (>) que 2013 
e ordenar (order by ) pelo total*/

selec