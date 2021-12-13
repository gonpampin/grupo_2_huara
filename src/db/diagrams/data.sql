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
INSERT INTO `order_details` (`id`, `product_id`, `order_id`, `price`, `quantity`) VALUES (1,1,1,500,3),(2,4,1,500,2),(3,8,1,500,10),(4,6,1,500,11),(5,3,1,500,8),(6,1,2,500,3),(7,1,2,500,2),(8,1,3,500,4),(9,1,4,500,4),(10,1,5,500,20);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'Delivered',10),(2,'Delivered',9),(3,'Delivered',8),(4,'Pending',2),(5,'Pending',1);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'MARROC','Chocolate con leche y chocolate blanco con pasta de maní','marroc.jpg',500.00,20,1),(2,'BORRACHITO','Chocolate semi amargo con crema de ciruelas al Malbec con dulce de leche','borrachito.jpg',500.00,20,1),(3,'DULCE DE LECHE CON NUEZ','Pasta de dulce de leche y nueces, entre una capa de chocolate con leche y una capa de chocolate blanco','nuez-ddl-blanco.jpg',500.00,20,1),(4,'TABLETA ALMENDRA','Chocolate amargo 70% cacao con naranja, jengibre y almendras','almendra.jpg',500.00,20,1),(5,'PISTACHO','Crema de chocolate blanco con pistachos, entre dos capas de chocolate semi amargo','pistacho.jpg',500.00,20,1),(6,'AVELLANAS','Chocolate amargo con crema de licor de naranja y avellanas tostadas','avellanas2.jpg',500.00,20,1),(7,'PISTACHO','Crema de chocolate blanco con pistachos, entre dos capas de chocolate semi amargo','avellanas2.jpg',500.00,20,1),(8,'TABLETA FRAMBUESAS','Chocolate semi amargo con frambuesas','frambuesa.jpg',500.00,20,2),(9,'TABLETA FRAMBUESAS CHOCO BLANCO','Chocolate blanco con frambuesas y nibs de cacao','frambuesa-blanco.jpg',500.00,20,2),(10,'FRUTOS ROJOS','Crema de chocolate semi amargo y frutos rojos, entre una capa de chocolate amargo y una de chocolate blanco','frutos-rojos.jpg',500.00,20,1),(11,'COOKIES \"N\" CREAM','Chocolate blanco con Oreos relleno de Nutella','huevo1.jpg',500.00,20,1),(12,'WHISKACHO','Crema de chocolate belga y whisky, con nibs de cacao','whisky.jpg',500.00,20,1),(13,'HUEVO TRUFADO DDL','Mucho dulce de leche entre dos capas de chocolate con leche','huevo2.jpg',500.00,20,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products_categories`
--

LOCK TABLES `products_categories` WRITE;
/*!40000 ALTER TABLE `products_categories` DISABLE KEYS */;
INSERT INTO `products_categories` VALUES (1,'Chocolates'),(2,'Trufas');
/*!40000 ALTER TABLE `products_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Pier','Bohman','EDTpxR411RV','pbohman0@princeton.edu',1),(2,'Carce','Seniour','CjYdoMrFOp','cseniour1@g.co',1),(3,'Alberto','Danko','SEB0s2aU7Z','adanko2@biglobe.ne.jp',1),(4,'Lewie','Junkinson','p9ZqbsypuHQ','ljunkinson3@livejournal.com',1),(5,'Aldrich','Buddington','HZNtZQ7','abuddington4@plala.or.jp',1),(6,'Lind','Rickis','NNLOcsXF','lrickis5@ask.com',1),(7,'Barclay','Lockless','Wg23Gcs','blockless6@nbcnews.com',1),(8,'Darn','Lewton','2ISI9jrvUeS','dlewton7@patch.com',1),(9,'Cheston','Keniwell','Q7CjNJc','ckeniwell8@themeforest.net',1),(10,'Enrique','Mecozzi','fF9sSXTjT','emecozzi9@ted.com',1),(11,'Randie','Hixson','JnptRYkJU','rhixsona@cargocollective.com',1),(12,'Xylia','Eathorne','J0kAsufeQPPN','xeathorneb@eepurl.com',1),(13,'Joaquin','Thomerson','YqAX4gWjRbI','jthomersonc@cbslocal.com',1),(14,'Morley','Letterick','Du0IErZjG','mletterickd@constantcontact.com',1),(15,'Calhoun','Nerne','hOMMZeXR9L','cnernee@patch.com',1),(16,'Fern','Kenzie','p1NnVI32','fkenzief@oracle.com',1),(17,'Karrah','Cotgrove','Z2rvyIlB3','kcotgroveg@studiopress.com',1),(18,'Yolanda','Celle','BMsgt3ss','ycelleh@acquirethisname.com',1),(19,'Lotta','Fetherstan','a840EYjaxu','lfetherstani@zdnet.com',2),(20,'Brenda','Grievson','jYa5S9um','bgrievsonj@ucoz.com',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users_categories`
--

LOCK TABLES `users_categories` WRITE;
/*!40000 ALTER TABLE `users_categories` DISABLE KEYS */;
INSERT INTO `users_categories` VALUES (1,'usuario'),(2,'administrador');
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

-- Dump completed on 2021-12-13 16:24:54
