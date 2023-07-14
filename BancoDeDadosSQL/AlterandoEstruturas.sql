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


/*Renomear a TABELA INTEIRA*/

alter table pessoas
rename to cadastroclientes

/* NOVA TABELA */


create table if not exists cursos (
nome varchar (30) not null unique, /*Unique nao deixas 2 cursos com o mesmo nome iguais*/
descricao text, /*tesxtos longos*/
carga int unsigned, /*'Sem sinal' economiza um byte para cada registro*/
totaulas int, 
ano year default '2016'
) default charset = utf8; /**/

alter table cursos
add column idcurso int first;

alter table cursos
add primary key (idcurso);

describe cursos;

/*APAGAR TABELAS INTEIRAS */

drop table cursos;

/*APAGAR COLUNAS */
alter table drop  