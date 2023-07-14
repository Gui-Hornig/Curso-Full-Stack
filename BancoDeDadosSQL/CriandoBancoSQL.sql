/*Criando banco*/ 

create database cadastroclientes
default character set utf8
default collate utf8_general_ci;

/*Adicionando informacoes*/ 

create table pessoas (
id int not null auto_increment,
nome varchar (30) NOT NULL, 
nascimento date NOT NULL,
sexo enum('M', 'F'),
peso decimal(5,2),
altura decimal(3,2),
nacionalidade varchar (20)  default 'Brasil',
primary key (id)
) default charset = utf8

/*Adicionar dados no banco*/ 

use cadastroclientes;
insert into pessoas
(id, nome, nascimento, sexo, peso, altura, nacionalidade)
values
('1', 'Godofrete', '1984-01-02', 'M', '7.8', '1.83', 'Brasil');

select * from pessoas; /*Selecione tudo de pessoas*/ 

