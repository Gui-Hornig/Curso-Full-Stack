/*Adicionando novas colunas*/

desc pessoas; /*descreve as colunas*/

alter table pessoas
add column profissao varchar(10);

/*Exclui colunas*/

alter table pessoas
drop column profissao;