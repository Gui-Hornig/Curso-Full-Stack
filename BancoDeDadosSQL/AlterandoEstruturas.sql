/*Adicionando novas colunas*/

desc pessoas; /*descreve as colunas*/

alter table pessoas
add column profissao varchar(10);

/*Exclui colunas*/

alter table pessoas
drop column profissao;

/*Adicionando colunas "After" depois de alguma que vc escolha*/

alter table pessoas
add column profissao varchar(10) after nome;


/* Adicionando como primeiro campo*/
alter table pessoas
add codigo int first;


/*Alterando a estrutura da definicao*/

alter table pessoas
modify column profissao varchar(20) not null default '';

/* Modificando o NOME  da Coluna, constrange e tipos primitivos */

alter table pessoas
change column profissao prof varchar (20) not null default'';
