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


use cadastroclientes;
insert into pessoas
(id, nome, nascimento, sexo, peso, altura, nacionalidade) 
values
(default, 'Creusa', '1920-12-30', 'F', '50.0', '1.65', default);

select * from pessoas; 

/*Se for inserir dados e a ordem for exatamente  mesma cadastrada no bano, nao precisa esscrever os campos */ 

insert into pessoas values
(default, 'Adalgiza', '1930-11-3', 'F', '63.0', '1.75', 'Irlanda');

select*from pessoas

/*Maneira para adicinar varios dados ao mesmo tempo*/ 

insert into pessoas values
(default, 'Ana', '1975-12-22', 'F', '52.3', '1.45', 'EUA'),
(default, 'Pedro', '2000-07-15', 'M', '70.9', '1.45', 'Brasil'),
(default, 'Maria', '1999-05-30', 'F', '75.9', '1.70', 'Portugal'),
(default, 'Claudio', '1975-4-22', 'M', '99.0', '2.15', 'Brasil');