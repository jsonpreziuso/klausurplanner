CREATE DATABASE  IF NOT EXISTS `tearproject` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tearproject`;

-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: tearproject
-- ------------------------------------------------------
-- Server version	8.0.26

CREATE TABLE `klassen` (
   `idklassen` int NOT NULL AUTO_INCREMENT,
   `name` varchar(45) DEFAULT NULL,
   `passwort` varchar(45) DEFAULT NULL,
   PRIMARY KEY (`idklassen`)
 ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
 
 CREATE TABLE `klausuren` (
   `idklausuren` int NOT NULL AUTO_INCREMENT,
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
   CONSTRAINT `fk_lehrer` FOREIGN KEY (`fk_lehrer`) REFERENCES `lehrer` (`idlehrer`)
 ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
 
 
 CREATE TABLE `lehrer` (
   `idlehrer` int NOT NULL AUTO_INCREMENT,
   `admin` int DEFAULT NULL,
   `vorname` varchar(45) DEFAULT NULL,
   `nachname` varchar(45) DEFAULT NULL,
   `email` varchar(45) DEFAULT NULL,
   `passwort` varchar(45) DEFAULT NULL,
   PRIMARY KEY (`idlehrer`)
 ) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci