use cadastro;
select*from pessoas;
insert into cursos values
('1', 'HTML4','Curso de HTML5','40','37','2014'),
('2','Algoritimo', 'Logica de Programacao', '20', '15','2014'),
('3','Photoshop', 'Dicas de Phooshop CC', '10', '8','2014'),
('4','PGP', 'Curso de PHP para Iniciantes', '40', '20','2010'),
('5','Jarva', 'Introducao a linguagem Java', '10', '29','2000'),
('6','MySQL', 'Banco de Dados MySQL', '30', '15','2016'),
('7','Word', 'Curso completo Word', '40', '30','2016'),
('8','Sapateado', 'Danca Ritimicas', '40', '30','2018'),
('9','Cozinha Arabe', 'Aprenda a fazer Kibe', '40', '30','2018'),
('10','Youtube', 'Gerar polemica e ganhar inscritos', '5', '2','2018');

/*Alerar, manipula uma linha da tabela*/

update cursos
set nome = 'HTML5'
where idcurso ='1';

update cursos
set nome = 'PHP', ano = '2015'
where idcurso = '4';

update cursos
set nome ='Java', carga = '40', ano = '2015'
where idcurso ='5'
limit 1; /*Limita a uma linha modificada*/

 /*Toma cuidado ao utiliza  o Update pois pode altera todos os bancos*/
update cursos
set carga = '800', ano = '2050'
where ano ='2018'

select*from cursos;

/*APAGAR LINHAS */

delete from cursos
where idcurso ='8';

delete from cursos /*apagando multiplas linhas*/
where ano ='2018'
limit 2;

truncate cursos;

select*from cursos; /*Remover todas as linhas da tabela*/