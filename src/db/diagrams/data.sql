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
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'MARROC','Chocolate con leche y chocolate blanco con pasta de maní','marroc.jpg',1000,20,1),(2,'BORRACHITO','Chocolate semi amargo con crema de ciruelas al Malbec con dulce de leche','borrachito.jpg',1000,20,1),(3,'DULCE DE LECHE CON NUEZ','Pasta de dulce de leche y nueces, entre una capa de chocolate con leche y una capa de chocolate blan','nuez-ddl-blanco.jpg',1000,20,1),(4,'TABLETA ALMENDRA','Chocolate amargo 70% cacao con naranja, jengibre y almendras','almendra.jpg',1000,20,1),(5,'PISTACHO','Crema de chocolate blanco con pistachos, entre dos capas de chocolate semi amargo','pistacho.jpg',1000,20,1),(6,'AVELLANAS','Chocolate amargo con crema de licor de naranja y avellanas tostadas','avellanas2.jpg',1000,20,1),(7,'TABLETA FRAMBUESAS','Chocolate semi amargo con frambuesas','frambuesa.jpg',1000,20,2),(8,'TABLETA FRAMBUESAS CHOCO BLANCO','Chocolate blanco con frambuesas y nibs de cacao','frambuesa-blanco.jpg',1000,20,2),(9,'FRUTOS ROJOS','Crema de chocolate semi amargo y frutos rojos, entre una capa de chocolate amargo y una de chocolate','frutos-rojos.jpg',1000,20,1),(10,'COOKIES \"N\" CREAM','Chocolate blanco con Oreos relleno de Nutella','huevo1.jpg',1000,20,3),(12,'HUEVO TRUFADO DDL','Mucho dulce de leche entre dos capas de chocolate con leche','huevo2.jpg',1000,20,3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products_categories`
--

LOCK TABLES `products_categories` WRITE;
/*!40000 ALTER TABLE `products_categories` DISABLE KEYS */;
INSERT INTO `products_categories` VALUES (1,'Tableta'),(2,'Bariloche'),(3,'Huevo');
/*!40000 ALTER TABLE `products_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (15,'Charlie','Bucket','$2a$10$Z8AZSjrSFxFySVznknnqyuVSpLQ2eyUofaWASiK0rxrtBIg6IDJT6','charlie@bucket.com','user-1644182882059_img.jpg',2),(16,'Augustus','Gloop','$2a$10$rLGaT1RANmad9Al8NFv19euTwa442fBqtnjmjd.sgegFV.lyRMj/m','augustus@gloop.com','user-1644182953106_img.jpg',2),(17,'Veruca','Salt','$2a$10$wjzUV1Sh5JoZf1mX4RPwau4rOlGjBwNbWgNAIdbsGY2I0rBpnW0vi','veruca@salt.com','user-1644183037894_img.jpg',2),(18,'Violet','Beauregarde','$2a$10$t4uy8SLGuBXzbUH7EsbcGeSRQEFtovsKcTqMRbA1mGAhZL0J2ovNK','violet@beauregarde.com','user-1644183171576_img.jpeg',2),(19,'Mike','Teavee','$2a$10$8E.jtp.HyTxBsKyWQoxabO6sHVW5i61EOzj6ich9/1nPEiKhlGHea','mike@teavee.com','user-1644183254412_img.jpg',2),(21,'Willy','Wonka','$2a$10$k43NnskwMOi0o4z11NpNv.gzkE8Dv97SMsTOfoZ518FtRwvZmY04O','admin@admin.com','user-1644183654632_img.jpg',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2022-02-06 19:08:47
