CREATE DATABASE  IF NOT EXISTS `tearproject` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tearproject`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: tearproject
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `klausuren`
--

DROP TABLE IF EXISTS `klausuren`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `klausuren` (
  `idklausuren` int NOT NULL,
  `fk_lehrer` int DEFAULT NULL,
  `fk_klassen` int DEFAULT NULL,
  `fach` varchar(45) DEFAULT NULL,
  `datum` varchar(45) DEFAULT NULL,
  `schulestunde` int DEFAULT NULL,
  `raumnummer` int DEFAULT NULL,
  `thema` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idklausuren`),
  KEY `fk_lehrer_idx` (`fk_lehrer`),
  KEY `fk_klassen_idx` (`fk_klassen`),
  CONSTRAINT `fk_klassen` FOREIGN KEY (`fk_klassen`) REFERENCES `klassen` (`idklassen`),
  CONSTRAINT `fk_lehrer` FOREIGN KEY (`fk_lehrer`) REFERENCES `lehrer` (`idlehrer`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `klausuren`
--

LOCK TABLES `klausuren` WRITE;
/*!40000 ALTER TABLE `klausuren` DISABLE KEYS */;
INSERT INTO `klausuren` VALUES (1,1,1,'LF2','22/04/22',2,201,'Struktogram'),(2,3,1,'LF5','25/04/22',4,201,'Simple Present'),(3,2,1,'LF6','27/04/22',5,202,'UML'),(4,4,1,'LF9','30/04/22',3,201,'IP6 & Offene Netz');
/*!40000 ALTER TABLE `klausuren` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-09 17:44:41
