# ************************************************************
# Sequel Pro SQL dump
# Version 4135
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.6.25)
# Database: servicios
# Generation Time: 2015-08-31 03:30:15 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table activity_level
# ------------------------------------------------------------

DROP TABLE IF EXISTS `activity_level`;

CREATE TABLE `activity_level` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `activity_level` WRITE;
/*!40000 ALTER TABLE `activity_level` DISABLE KEYS */;

INSERT INTO `activity_level` (`id`, `name`)
VALUES
	(1,'active'),
	(2,'pending approval'),
	(3,'payment required');

/*!40000 ALTER TABLE `activity_level` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table email
# ------------------------------------------------------------

DROP TABLE IF EXISTS `email`;

CREATE TABLE `email` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT '',
  `user_id` int(11) unsigned NOT NULL,
  `primary` tinyint(1) NOT NULL DEFAULT '1',
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `email_2` (`email`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `email_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `email` WRITE;
/*!40000 ALTER TABLE `email` DISABLE KEYS */;

INSERT INTO `email` (`id`, `email`, `user_id`, `primary`, `date_created`, `last_updated`)
VALUES
	(1,'manuel@ruedamanuel.com',1,1,'2015-06-04 20:00:15','2015-06-04 20:00:15'),
	(2,'juanjoserueda@gmail.com',2,1,'2015-08-30 19:37:01','2015-08-30 19:37:01'),
	(16,'test@test.com',24,1,'2015-08-30 23:25:18','2015-08-30 23:25:18');

/*!40000 ALTER TABLE `email` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table images
# ------------------------------------------------------------

DROP TABLE IF EXISTS `images`;

CREATE TABLE `images` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uri` varchar(255) NOT NULL DEFAULT '',
  `service_provider_id` int(11) unsigned DEFAULT NULL,
  `user_id` int(11) unsigned DEFAULT NULL,
  `public` tinyint(1) NOT NULL DEFAULT '0',
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uri` (`uri`),
  KEY `service_provider_id` (`service_provider_id`),
  KEY `person_id` (`user_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`service_provider_id`) REFERENCES `service_provider` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;

INSERT INTO `images` (`id`, `uri`, `service_provider_id`, `user_id`, `public`, `date_created`, `last_updated`)
VALUES
	(1,'icon-shop.png',NULL,NULL,1,'2015-05-21 16:41:36','2015-05-21 16:42:08'),
	(2,'icon-man.png',NULL,NULL,1,'2015-05-21 16:41:36','2015-05-21 16:42:08'),
	(3,'icon-woman.png',NULL,NULL,1,'2015-05-21 16:41:36','2015-05-21 16:42:08'),
	(4,'carpintec-logo.jpg',2,NULL,0,'2015-05-21 16:41:36','2015-05-21 16:42:08'),
	(5,'carpintec-bg.jpg',2,NULL,0,'2015-05-21 16:41:36','2015-05-21 16:42:08'),
	(6,'small_steps.png',NULL,NULL,1,'2015-05-21 16:52:14','2015-05-21 16:52:50');

/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table oauth
# ------------------------------------------------------------

DROP TABLE IF EXISTS `oauth`;

CREATE TABLE `oauth` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `provider` varchar(128) NOT NULL DEFAULT '',
  `user_id` int(11) unsigned NOT NULL,
  `provider_id` int(11) unsigned NOT NULL,
  `profile_picture` varchar(512) NOT NULL DEFAULT '',
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `provider_id` (`provider_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `oauth_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table profession
# ------------------------------------------------------------

DROP TABLE IF EXISTS `profession`;

CREATE TABLE `profession` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL DEFAULT '',
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `profession` WRITE;
/*!40000 ALTER TABLE `profession` DISABLE KEYS */;

INSERT INTO `profession` (`id`, `name`, `date_created`, `last_updated`)
VALUES
	(1,'carpintería','2015-05-06 16:02:55','2015-05-06 16:02:55'),
	(2,'plomería','2015-05-06 16:03:17','2015-05-06 16:03:17'),
	(3,'mecánica','2015-05-06 16:04:26','2015-05-06 16:04:26'),
	(4,'limpieza','2015-05-06 16:05:08','2015-05-06 16:05:08'),
	(5,'cerrajería','2015-05-06 16:05:21','2015-05-06 16:05:21'),
	(6,'mensajería','2015-05-06 16:05:45','2015-05-06 16:05:45'),
	(7,'traducciones','2015-05-06 16:06:05','2015-05-06 16:06:05'),
	(8,'construcción','2015-05-06 16:06:48','2015-05-06 16:06:48'),
	(9,'cocina','2015-05-06 16:08:03','2015-05-06 16:08:03'),
	(10,'catering','2015-05-06 16:08:11','2015-05-06 16:08:11'),
	(11,'instalaciones eléctricas','2015-05-06 16:17:58','2015-05-06 16:17:58');

/*!40000 ALTER TABLE `profession` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table review
# ------------------------------------------------------------

DROP TABLE IF EXISTS `review`;

CREATE TABLE `review` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `service_provider_id` int(11) unsigned NOT NULL,
  `rating` int(1) unsigned NOT NULL,
  `description` text NOT NULL,
  `user_id` int(11) unsigned NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `service_provider_id` (`service_provider_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`service_provider_id`) REFERENCES `service_provider` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;

INSERT INTO `review` (`id`, `service_provider_id`, `rating`, `description`, `user_id`, `date_created`, `last_updated`, `title`)
VALUES
	(1,2,6,'La calidad del trabajo fue muy buena pero se demoraron un poco más de lo presupuestado. Fueron amables y los volvería a contratar, aunque les recomiendo que estimen mejor el tiempo en el que dicen que van a completar el contrato.',1,'2015-05-26 14:57:18','2015-05-26 14:58:36','Buena calidad, un poco demorado'),
	(2,2,10,'Excelente trabajo. Nadie mejor.',2,'2015-05-26 15:13:49','2015-05-26 15:13:49','Recomendadísimo');

/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table service_provider
# ------------------------------------------------------------

DROP TABLE IF EXISTS `service_provider`;

CREATE TABLE `service_provider` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL DEFAULT '',
  `service_provider_type_id` int(11) unsigned NOT NULL,
  `address` varchar(512) NOT NULL DEFAULT '',
  `activity_level_id` int(11) unsigned NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `img_icon` int(11) unsigned NOT NULL DEFAULT '1',
  `alias` varchar(255) NOT NULL DEFAULT '',
  `img_bg` int(11) unsigned NOT NULL DEFAULT '6',
  PRIMARY KEY (`id`),
  UNIQUE KEY `alias` (`alias`),
  KEY `activity_level_id` (`activity_level_id`),
  KEY `service_provider_type_id` (`service_provider_type_id`),
  KEY `img_icon` (`img_icon`),
  CONSTRAINT `service_provider_ibfk_1` FOREIGN KEY (`service_provider_type_id`) REFERENCES `service_provider_type` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `service_provider_ibfk_2` FOREIGN KEY (`activity_level_id`) REFERENCES `activity_level` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `service_provider_ibfk_3` FOREIGN KEY (`img_icon`) REFERENCES `images` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `service_provider` WRITE;
/*!40000 ALTER TABLE `service_provider` DISABLE KEYS */;

INSERT INTO `service_provider` (`id`, `name`, `service_provider_type_id`, `address`, `activity_level_id`, `date_created`, `last_updated`, `img_icon`, `alias`, `img_bg`)
VALUES
	(1,'Pedro Tablas',1,'Calle 53 # 20 - 30',1,'2015-05-06 16:56:38','2015-05-21 16:53:27',1,'pedro-tablas',6),
	(2,'Carpintec',1,'Calle 10 # 10-15',1,'2015-05-11 15:35:55','2015-05-21 18:47:31',4,'carpintec',5),
	(3,'Federico Pérez',2,'Calle 15 # 1-15',1,'2015-05-11 15:35:55','2015-05-21 16:53:31',2,'federico-perez',6),
	(4,'Efraín Manrique',2,'Calle 5 # 100-15',1,'2015-05-11 15:35:55','2015-05-21 16:53:33',2,'efrain-manrique',6),
	(5,'Super Carpinteros',1,'Carrera 5 # 75-1',1,'2015-05-11 15:35:55','2015-05-21 16:53:34',1,'super-carpinteros',6),
	(6,'Bima',1,'Autopista Norte # 190-10',1,'2015-05-11 15:35:55','2015-05-21 16:53:35',1,'bima',6),
	(7,'Pedro Navajas',2,'Calle 71 # 1-90',1,'2015-05-11 15:42:58','2015-05-21 16:53:37',2,'pedro-navajas',6),
	(8,'Pedro Tuercas',2,'Calle 10 # 10 - 10',1,'2015-05-11 16:32:05','2015-05-21 16:53:38',2,'pedro-tuercas',6);

/*!40000 ALTER TABLE `service_provider` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table service_provider_profession
# ------------------------------------------------------------

DROP TABLE IF EXISTS `service_provider_profession`;

CREATE TABLE `service_provider_profession` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `service_provider_id` int(11) unsigned NOT NULL,
  `profession_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `service_provider_id` (`service_provider_id`),
  KEY `profession_id` (`profession_id`),
  CONSTRAINT `service_provider_profession_ibfk_1` FOREIGN KEY (`service_provider_id`) REFERENCES `service_provider` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `service_provider_profession_ibfk_2` FOREIGN KEY (`profession_id`) REFERENCES `profession` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `service_provider_profession` WRITE;
/*!40000 ALTER TABLE `service_provider_profession` DISABLE KEYS */;

INSERT INTO `service_provider_profession` (`id`, `service_provider_id`, `profession_id`)
VALUES
	(1,1,1),
	(2,2,1),
	(3,3,1),
	(4,4,1),
	(5,5,1),
	(6,6,1),
	(7,7,1),
	(8,8,3);

/*!40000 ALTER TABLE `service_provider_profession` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table service_provider_type
# ------------------------------------------------------------

DROP TABLE IF EXISTS `service_provider_type`;

CREATE TABLE `service_provider_type` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(256) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `service_provider_type` WRITE;
/*!40000 ALTER TABLE `service_provider_type` DISABLE KEYS */;

INSERT INTO `service_provider_type` (`id`, `type`)
VALUES
	(1,'empresa'),
	(2,'persona');

/*!40000 ALTER TABLE `service_provider_type` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `last_name` varchar(255) NOT NULL DEFAULT '',
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `name`, `last_name`, `date_created`, `last_updated`)
VALUES
	(1,'Manuel','Rueda','2015-05-26 14:49:17','2015-05-26 14:49:17'),
	(2,'Juan José','Rueda','2015-05-26 15:12:45','2015-05-26 15:12:45'),
	(24,'Name','Lastname','2015-08-30 23:25:18','2015-08-30 23:25:18');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Dumping routines (PROCEDURE) for database 'servicios'
--
DELIMITER ;;

# Dump of PROCEDURE DeleteUser
# ------------------------------------------------------------

/*!50003 DROP PROCEDURE IF EXISTS `DeleteUser` */;;
/*!50003 SET SESSION SQL_MODE="STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION"*/;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `DeleteUser`(
	IN userId INT
)
    COMMENT 'Deletes a user from the db.'
BEGIN
	DECLARE code CHAR(5);
	DECLARE msg TEXT;
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    	BEGIN
    		GET DIAGNOSTICS CONDITION 1
        		code = RETURNED_SQLSTATE, msg = MESSAGE_TEXT;
        	SELECT -1 AS `id`, code AS `error_code`, msg AS `error_message`;
        	ROLLBACK;
		END;
	START TRANSACTION;
		DELETE FROM user WHERE id = userId;
	COMMIT;

END */;;

/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
# Dump of PROCEDURE RegisterUser
# ------------------------------------------------------------

/*!50003 DROP PROCEDURE IF EXISTS `RegisterUser` */;;
/*!50003 SET SESSION SQL_MODE="STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION"*/;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `RegisterUser`(
	IN iemail VARCHAR(255),
	IN iname VARCHAR(255),
	IN ilastname VARCHAR(255),
	IN isOauth INT,
	IN ipassword VARCHAR(255) 
)
    COMMENT 'Creates a new user in the db.'
BEGIN
	DECLARE userId INT;
	DECLARE code CHAR(5);
	DECLARE msg TEXT;
	DECLARE `_rollback` BOOL DEFAULT 0;
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    	BEGIN
    		GET DIAGNOSTICS CONDITION 1
        		code = RETURNED_SQLSTATE, msg = MESSAGE_TEXT;
        	SELECT -1 AS `id`, code AS `error_code`, msg AS `error_message`;
        	ROLLBACK;
		END;
	START TRANSACTION;
		INSERT INTO `user` (`name`, `last_name`) VALUES (iname, ilastname);
		SELECT LAST_INSERT_ID() INTO userId;
		INSERT INTO `email` (`user_id`, `email`, `primary`) VALUES (userId, iemail, 1);
	COMMIT;

END */;;

/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
DELIMITER ;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
