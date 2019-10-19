DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE `burger_db`;
USE  burger_db;
CREATE TABLE `burgers` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(45) NOT NULL,
  `devoured` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ;
