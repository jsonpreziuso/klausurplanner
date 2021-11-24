-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 24, 2021 at 05:01 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tearproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `klassen`
--

CREATE TABLE `klassen` (
  `idklassen` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `passwort` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `klassen`
--

INSERT INTO `klassen` (`idklassen`, `name`, `passwort`) VALUES
(60, '11ITa', '123'),
(62, '12ITa', '123');

-- --------------------------------------------------------

--
-- Table structure for table `klausuren`
--

CREATE TABLE `klausuren` (
  `idklausuren` int(11) NOT NULL,
  `fk_lehrer` int(11) DEFAULT NULL,
  `fk_klassen` int(11) DEFAULT NULL,
  `lehrername` varchar(25) NOT NULL,
  `klassename` varchar(10) NOT NULL,
  `fach` varchar(45) DEFAULT NULL,
  `datum` varchar(45) DEFAULT NULL,
  `schulestunde` int(11) DEFAULT NULL,
  `raumnummer` varchar(11) DEFAULT NULL,
  `thema` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `klausuren`
--

INSERT INTO `klausuren` (`idklausuren`, `fk_lehrer`, `fk_klassen`, `lehrername`, `klassename`, `fach`, `datum`, `schulestunde`, `raumnummer`, `thema`) VALUES
(1, NULL, 62, 'Wahoo', '12ITa', 'LF04', '2021-12-01', 4, '1', '1'),
(2, NULL, 62, 'Wahoo', '12ITa', 'LF04', '2021-12-01', 4, '2', '1'),
(3, NULL, 62, 'Wahoo', '12ITa', 'LF04', '2021-12-01', 4, '12', '1');

-- --------------------------------------------------------

--
-- Table structure for table `lehrer`
--

CREATE TABLE `lehrer` (
  `idlehrer` int(11) NOT NULL,
  `admin` varchar(5) DEFAULT NULL,
  `vorname` varchar(45) DEFAULT NULL,
  `nachname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `passwort` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lehrer`
--

INSERT INTO `lehrer` (`idlehrer`, `admin`, `vorname`, `nachname`, `email`, `passwort`) VALUES
(21, 'True', 'Waluigi', 'Wahoo', 'imaluigi@gmail.it', '7359fa105ab38db08e3a70ac1953571b'),
(26, 'True', 'Tetet', 'Numberone', 'spageht@pasta.it', '6b1b2efcc08d5833cf28b34bd2d0f74d'),
(29, 'False', 'mike', 'Numberone', 'spat@pasta.it', '6b1b2efcc08d5833cf28b34bd2d0f74d');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `klassen`
--
ALTER TABLE `klassen`
  ADD PRIMARY KEY (`idklassen`);

--
-- Indexes for table `klausuren`
--
ALTER TABLE `klausuren`
  ADD PRIMARY KEY (`idklausuren`),
  ADD KEY `fk_lehrer_idx` (`fk_lehrer`),
  ADD KEY `fk_klassen_idx` (`fk_klassen`);

--
-- Indexes for table `lehrer`
--
ALTER TABLE `lehrer`
  ADD PRIMARY KEY (`idlehrer`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `klassen`
--
ALTER TABLE `klassen`
  MODIFY `idklassen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `klausuren`
--
ALTER TABLE `klausuren`
  MODIFY `idklausuren` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `lehrer`
--
ALTER TABLE `lehrer`
  MODIFY `idlehrer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `klausuren`
--
ALTER TABLE `klausuren`
  ADD CONSTRAINT `fk_klassen` FOREIGN KEY (`fk_klassen`) REFERENCES `klassen` (`idklassen`),
  ADD CONSTRAINT `fk_lehrer` FOREIGN KEY (`fk_lehrer`) REFERENCES `lehrer` (`idlehrer`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
