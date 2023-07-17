  /*Agrupa e conta quantos registros tem em cada coluna*/
 select totalaulas, count(*) from cursos
 group by totaaulas
 order by totaaulas;
