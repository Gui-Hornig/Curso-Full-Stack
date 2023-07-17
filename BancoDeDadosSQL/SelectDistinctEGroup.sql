  /*Agrupa e conta quantos registros tem em cada coluna*/
  select totaulas, count(*) from cursos
 group by totaulas
 order by totaulas;

/*Agrupando com 'where'*/

select * from cursos where totaulas > 30;