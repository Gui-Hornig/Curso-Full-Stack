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

/*Precisa fazer o Update um por um mas no Work*/
UPDATE `cadastro`.`gafanhotos` SET `cursopreferido` = '22' WHERE (`id` = '2');
UPDATE `cadastro`.`gafanhotos` SET `cursopreferido` = '12' WHERE (`id` = '3');
UPDATE `cadastro`.`gafanhotos` SET `cursopreferido` = '7' WHERE (`id` = '4');
UPDATE `cadastro`.`gafanhotos` SET `cursopreferido` = '1' WHERE (`id` = '5');
UPDATE `cadastro`.`gafanhotos` SET `cursopreferido` = '8' WHERE (`id` = '6');
UPDATE `cadastro`.`gafanhotos` SET `cursopreferido` = '4' WHERE (`id` = '7');
UPDATE `cadastro`.`gafanhotos` SET `cursopreferido` = '5' WHERE (`id` = '8');
UPDATE `cadastro`.`gafanhotos` SET `cursopreferido` = '3' WHERE (`id` = '9');
UPDATE `cadastro`.`gafanhotos` SET `cursopreferido` = '30' WHERE (`id` = '10');
UPDATE `cadastro`.`gafanhotos` SET `cursopreferido` = '22' WHERE (`id` = '11');