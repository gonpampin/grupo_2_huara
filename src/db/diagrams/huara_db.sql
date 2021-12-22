-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: huara_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_details` (
  `id` int(100) NOT NULL,
  `product_id` int(100) DEFAULT NULL,
  `order_id` int(100) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `quantity` int(100) DEFAULT NULL,
  `amount` double GENERATED ALWAYS AS (`price` * `quantity`) VIRTUAL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(100) NOT NULL,
  `status` varchar(20) DEFAULT NULL,
  `user_id` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `product_category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_category_id_idx` (`product_category_id`),
  CONSTRAINT `product_category_id` FOREIGN KEY (`product_category_id`) REFERENCES `products_categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (14,'MARROC','Chocolate con leche y chocolate blanco con pasta de maní','marroc.jpg',1000,20,1),(15,'BORRACHITO','Chocolate semi amargo con crema de ciruelas al Malbec con dulce de leche','borrachito.jpg',1000,20,1),(16,'DULCE DE LECHE CON NUEZ','Pasta de dulce de leche y nueces, entre una capa de chocolate con leche y una capa de chocolate blanco','nuez-ddl-blanco.jpg',1000,20,1),(17,'TABLETA ALMENDRA','Chocolate amargo 70% cacao con naranja, jengibre y almendras','almendra.jpg',1000,20,1),(18,'PISTACHO','Crema de chocolate blanco con pistachos, entre dos capas de chocolate semi amargo','pistacho.jpg',1000,20,1),(19,'AVELLANAS','Chocolate amargo con crema de licor de naranja y avellanas tostadas','avellanas2.jpg',1000,20,1),(20,'PISTACHO','Crema de chocolate blanco con pistachos, entre dos capas de chocolate semi amargo','avellanas2.jpg',1000,20,1),(21,'TABLETA FRAMBUESAS','Chocolate semi amargo con frambuesas','frambuesa.jpg',1000,20,2),(22,'TABLETA FRAMBUESAS CHOCO BLANCO','Chocolate blanco con frambuesas y nibs de cacao','frambuesa-blanco.jpg',1000,20,2),(23,'FRUTOS ROJOS','Crema de chocolate semi amargo y frutos rojos, entre una capa de chocolate amargo y una de chocolate blanco','frutos-rojos.jpg',1000,20,1),(24,'COOKIES \"N\" CREAM','Chocolate blanco con Oreos relleno de Nutella','huevo1.jpg',1000,20,1),(25,'WHISKACHO','Crema de chocolate belga y whisky, con nibs de cacao','whisky.jpg',1000,20,1),(26,'HUEVO TRUFADO DDL','Mucho dulce de leche entre dos capas de chocolate con leche','huevo2.jpg',1000,20,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_categories`
--

DROP TABLE IF EXISTS `products_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_categories`
--

LOCK TABLES `products_categories` WRITE;
/*!40000 ALTER TABLE `products_categories` DISABLE KEYS */;
INSERT INTO `products_categories` VALUES (1,'Tableta'),(2,'Bariloche');
/*!40000 ALTER TABLE `products_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `user_category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `user_category_id_idx` (`user_category_id`),
  CONSTRAINT `user_category_id` FOREIGN KEY (`user_category_id`) REFERENCES `users_categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'BERNARDO','www','$2a$10$YroBwbanSRy4EtgU69rHguJL3.EjyT4Yn6g8s0VRB.byjWoby.KAe','bernardo@bernardo.com','user-1639840404164_img.jpg',2),(4,'qqq','qqqq','$2a$10$LYU9Q0ubyQY8fa6omZYqSOIOHVxKJdd4IYVUUh9gaVbMo.Y33Tq.S','bernardo.segui@g.com','user-1639840580820_img.jpg',2),(6,'BERNARDO','SEGUI','$2a$10$DPmpTdssreSONSFkCyb4duFCuE6UezpfJOAuc1z5zm6KqVgTHtOOq','b@b.com','user-1639855839487_img.jpg',2),(7,'cacomaster','admin','$2a$10$L6muOHU73IvGLGdO8ZqOjeVlQYKtizAms5Z4UUsLCTjtHsFvXdBW2','admin@admin.com','user-1639856114559_img.jpg',1),(8,'b','b','$2a$10$d6NS6J8hg7.mwmOGI0Zzjejmhm6pB6Zv8Ug/Z/55WTA0yrfQS6B2u','b@ahorasi.com','hareeeee.jpg',2),(9,'pendorcho','pendorcho','$2a$10$t4B62qgvLUxPgjC4ZbKRc.LtANrA9J5BAHmB1Slm8vMkoNXHG7lkO','pendorcho@pendorcho.com','user-1640050261059_img.jpg',2),(10,'aaaaaaaa','qqqqqqq','$2a$10$5jTdtjK9nr9H8XQE3BjTMOxd3CuzH1smTjCsbZTe0C3lPZES8LZ6O','aa@qq.com','user-1640201933624_img.jpg',2),(11,'BERNARDO','SEGUI','$2a$10$t92wYY9uOFzxwS1f85kEQOyK03ccIO.zZTflYcPH4UPmxVTxM46JC','bernardo.segui@r.com','user-1640202924089_img.jpg',NULL),(12,'qqqq','qqqq','$2a$10$7Deh0dLai/EPLq/SG0/rqudYFOwV62zsrgtAndunN0Isi5ogucC.e','qqqq@qqq.com','user-1640203142360_img.jpg',NULL),(13,'BERNARDO','SEGUI','$2a$10$FwIRLpvW7LMcnm4nSk0RseXZiTajz8f.D.319bmFOLoxaJlWICrgO','bernardo.segui@gil.com','user-1640203298108_img.jpg',2),(14,'www','wwww','$2a$10$jhvQMFuPG4fCj3rjIu9ZlOWWd0Og0icpTorOE5Ng.IXF4P9Ql0DP2','www@www.com','user-1640203853125_img.jpg',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_categories`
--

DROP TABLE IF EXISTS `users_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_categories` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_categories`
--

LOCK TABLES `users_categories` WRITE;
/*!40000 ALTER TABLE `users_categories` DISABLE KEYS */;
INSERT INTO `users_categories` VALUES (1,'admin'),(2,'cliente');
/*!40000 ALTER TABLE `users_categories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-22 17:34:13
