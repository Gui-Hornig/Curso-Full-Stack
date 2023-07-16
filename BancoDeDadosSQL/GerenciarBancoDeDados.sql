show create table amigos; /*Descobre o comando que foi utilizado para crir a tablea no PHP MYadim*/

| amigos | CREATE TABLE `amigos` ( 
     `id` int(11) NOT NULL AUTO_INCREMENT,
      `nome` varchar(30) NOT NULL,
      `telefone` varchar(11) DEFAULT NULL,
      PRIMARY KEY (`id`),
       UNIQUE KEY `nome` (`nome`)
       ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci |