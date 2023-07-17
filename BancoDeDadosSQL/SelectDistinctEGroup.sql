  /*Agrupa e conta quantos registros tem em cada coluna*/
  select totaulas, count(*) from cursos
 group by totaulas
 order by totaulas;
