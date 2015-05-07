# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.6.14)
# Database: servicios
# Generation Time: 2015-05-06 23:55:10 +0000
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

LOCK TABLES `activity_level` WRITE;
/*!40000 ALTER TABLE `activity_level` DISABLE KEYS */;

INSERT INTO `activity_level` (`id`, `name`)
VALUES
	(1,'active'),
	(2,'pending approval'),
	(3,'payment required');

/*!40000 ALTER TABLE `activity_level` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table profession
# ------------------------------------------------------------

DROP TABLE IF EXISTS `profession`;

CREATE TABLE `profession` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL DEFAULT '',
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

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
  `last_updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `activity_level_id` (`activity_level_id`),
  KEY `service_provider_type_id` (`service_provider_type_id`),
  CONSTRAINT `service_provider_ibfk_2` FOREIGN KEY (`activity_level_id`) REFERENCES `activity_level` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `service_provider_ibfk_1` FOREIGN KEY (`service_provider_type_id`) REFERENCES `service_provider_type` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

LOCK TABLES `service_provider` WRITE;
/*!40000 ALTER TABLE `service_provider` DISABLE KEYS */;

INSERT INTO `service_provider` (`id`, `name`, `service_provider_type_id`, `address`, `activity_level_id`, `date_created`, `last_updated`)
VALUES
	(1,'Pedro Tablas',1,'Calle 53 # 20 - 30',1,'2015-05-06 16:56:38','2015-05-06 16:56:38');

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
  CONSTRAINT `service_provider_profession_ibfk_2` FOREIGN KEY (`profession_id`) REFERENCES `profession` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `service_provider_profession_ibfk_1` FOREIGN KEY (`service_provider_id`) REFERENCES `service_provider` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

LOCK TABLES `service_provider_profession` WRITE;
/*!40000 ALTER TABLE `service_provider_profession` DISABLE KEYS */;

INSERT INTO `service_provider_profession` (`id`, `service_provider_id`, `profession_id`)
VALUES
	(1,1,1);

/*!40000 ALTER TABLE `service_provider_profession` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table service_provider_type
# ------------------------------------------------------------

DROP TABLE IF EXISTS `service_provider_type`;

CREATE TABLE `service_provider_type` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(256) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

LOCK TABLES `service_provider_type` WRITE;
/*!40000 ALTER TABLE `service_provider_type` DISABLE KEYS */;

INSERT INTO `service_provider_type` (`id`, `type`)
VALUES
	(1,'empresa'),
	(2,'persona');

/*!40000 ALTER TABLE `service_provider_type` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
