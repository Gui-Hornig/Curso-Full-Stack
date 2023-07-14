create database cadastroclientes
default character set utf8
default collate utf8_general_ci;

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

use cadastroclientes;
(id, nome, nascimento, sexo, peso, altura, nacionalidade)
('1', 'Godofrete', '1984-01-02', 'M', '7.8', '1.83', 'Brasil');