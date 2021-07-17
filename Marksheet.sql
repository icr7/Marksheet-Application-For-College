CREATE DATABASE  IF NOT EXISTS `schooldb`;
USE `schooldb`;

--
-- Table structure for table `admintable`
--

DROP TABLE IF EXISTS `admintable`;

CREATE TABLE `admintable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


--
-- Table structure for table `studenttable`
--


DROP TABLE IF EXISTS `studenttable`;

CREATE TABLE `studenttable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `english` int DEFAULT NULL,
  `hindi` int DEFAULT NULL,
  `maths` int DEFAULT NULL,
  `science` int DEFAULT NULL,
  `sst` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


