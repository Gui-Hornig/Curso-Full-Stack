show create table amigos; /*Descobre o comando que foi utilizado para crir a tablea no PHP MYadim*/

| amigos | CREATE TABLE `amigos` ( 
     `id` int(11) NOT NULL AUTO_INCREMENT,
      `nome` varchar(30) NOT NULL,
      `telefone` varchar(11) DEFAULT NULL,
      PRIMARY KEY (`id`),
       UNIQUE KEY `nome` (`nome`)
       ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci |

       /*Como foi criado o banco de dados*/

       show create database exemplo;
        Create Database
        CREATE DATABASE `exemplo` !40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci 
     
      /*Alterar dados */

        ALTER TABLE `amigos` CHANGE `telefone` `telefone` VARCHAR(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL;

        ALTER TABLE `amigos` ADD `idade` INT NOT NULL AFTER `nome`;

        ALTER TABLE `amigos` DROP `idade`;

        ALTER TABLE `amigos` DROP `idade`;