create database cadastroclientes
default character set utf8
default collate utf8_general_ci;

create table pessoas (
id int not null auto_increment,
nome varchar (30) NOT NULL, 
nascimento date NOT NULL,
sexo enum('M', 'F'),
peso decimal(5,2),