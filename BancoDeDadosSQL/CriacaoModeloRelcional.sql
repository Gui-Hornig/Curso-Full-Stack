/* InnoDB e uma 'Engine' um mecanismo que suporta chaves estrangeiras
MyISAM -> nao da suporte as 4 regra principais para uma BOA transacao
XtraDB  
todas sao 'Engine' 

ACID
A = Atomicidade, nao pode ser dividida em subtarefas ou tudo acontece ou nada e considerado 
C = Consistencia, se antes de fazer a transacao estava OK, depois da transacao precisa estar OK
I = isolamento, quando tem duas transacaoes, elas precisao ser de modo isolado sem afetar a outra
D = Durabilidade, precisa ter os dados salvos o tempo necessario nao pode perder dados  */

use cadastro;
desc gafanhotos;

alter table gafanhotos
add column cursopreferido int;
/*O cursopreferido da tabela gafanhotos esta ligados com idcursos da tabela cursos */
alter table gafanhotos
add foreign key(cursopreferido)
references cursos(idcurso);

/*o meu aluno '1' vai gostar do curso '6'*/
update gafanhoos set cursopreferido = '6' where id = '1';