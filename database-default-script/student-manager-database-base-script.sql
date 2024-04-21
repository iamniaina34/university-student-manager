-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: student-manager-database
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `annee_universitaire`
--

DROP TABLE IF EXISTS `annee_universitaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `annee_universitaire` (
  `auId` int NOT NULL AUTO_INCREMENT,
  `auDeb` date NOT NULL,
  `auFin` date NOT NULL,
  PRIMARY KEY (`auId`),
  UNIQUE KEY `auDeb_UNIQUE` (`auDeb`),
  UNIQUE KEY `auFin_UNIQUE` (`auFin`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `annee_universitaire`
--

LOCK TABLES `annee_universitaire` WRITE;
/*!40000 ALTER TABLE `annee_universitaire` DISABLE KEYS */;
INSERT INTO `annee_universitaire` VALUES (1,'2021-01-01','2022-01-01'),(2,'2022-01-01','2023-01-01'),(3,'2023-01-01','2024-01-01');
/*!40000 ALTER TABLE `annee_universitaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classe`
--

DROP TABLE IF EXISTS `classe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classe` (
  `classeId` varchar(16) NOT NULL,
  `niveauId` varchar(4) NOT NULL,
  `parcoursId` varchar(8) NOT NULL,
  `groupeId` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`classeId`),
  KEY `fk_NIVEAU_has_PARCOURS_PARCOURS1_idx` (`parcoursId`),
  KEY `fk_NIVEAU_has_PARCOURS_NIVEAU1_idx` (`niveauId`),
  KEY `fk_CLASSE_GROUPE1_idx` (`groupeId`),
  CONSTRAINT `groupeId` FOREIGN KEY (`groupeId`) REFERENCES `groupe` (`groupeId`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `niveauId` FOREIGN KEY (`niveauId`) REFERENCES `niveau` (`niveauId`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classe`
--

LOCK TABLES `classe` WRITE;
/*!40000 ALTER TABLE `classe` DISABLE KEYS */;
INSERT INTO `classe` VALUES ('L1IG','L1','IG',NULL),('L3IGG2','L3','IG','G2'),('M1IG','M1','IG',NULL);
/*!40000 ALTER TABLE `classe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classe_etudiant`
--

DROP TABLE IF EXISTS `classe_etudiant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classe_etudiant` (
  `numMat` varchar(8) NOT NULL,
  `classeId` varchar(16) DEFAULT NULL,
  `auId` int DEFAULT NULL,
  PRIMARY KEY (`numMat`),
  KEY `fk_ETUDIANT_has_NIVEAU_ETUDIANT1_idx` (`numMat`),
  KEY `fk_CLASSE_ETUDIANT_CLASSE1_idx` (`classeId`),
  KEY `auId_idx` (`auId`),
  CONSTRAINT `auId` FOREIGN KEY (`auId`) REFERENCES `annee_universitaire` (`auId`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `classeIdFkInClasse_etudiant` FOREIGN KEY (`classeId`) REFERENCES `classe` (`classeId`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `numMat` FOREIGN KEY (`numMat`) REFERENCES `etudiant` (`numMat`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classe_etudiant`
--

LOCK TABLES `classe_etudiant` WRITE;
/*!40000 ALTER TABLE `classe_etudiant` DISABLE KEYS */;
INSERT INTO `classe_etudiant` VALUES ('1407H-F','L3IGG2',3);
/*!40000 ALTER TABLE `classe_etudiant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `classe_etudiant_view`
--

DROP TABLE IF EXISTS `classe_etudiant_view`;
/*!50001 DROP VIEW IF EXISTS `classe_etudiant_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `classe_etudiant_view` AS SELECT 
 1 AS `anneeUniversitaire`,
 1 AS `classeId`,
 1 AS `numMat`,
 1 AS `nom`,
 1 AS `prenom`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `element_constitutif`
--

DROP TABLE IF EXISTS `element_constitutif`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `element_constitutif` (
  `ecId` varchar(16) NOT NULL,
  `professeurId` int DEFAULT NULL,
  `ecDesign` varchar(64) NOT NULL,
  `ueId` int DEFAULT NULL,
  `ecCredit` int NOT NULL,
  `ET` int DEFAULT NULL,
  `ED` int DEFAULT NULL,
  `EP` int DEFAULT NULL,
  PRIMARY KEY (`ecId`),
  KEY `ueId_idx` (`ueId`),
  KEY `fk_ELEMENT_CONSTITUTIF_PROFESSEUR1_idx` (`professeurId`),
  CONSTRAINT `professeurIdFkInEc` FOREIGN KEY (`professeurId`) REFERENCES `professeur` (`professeurId`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `ueId` FOREIGN KEY (`ueId`) REFERENCES `unite_enseignement` (`ueId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `element_constitutif`
--

LOCK TABLES `element_constitutif` WRITE;
/*!40000 ALTER TABLE `element_constitutif` DISABLE KEYS */;
INSERT INTO `element_constitutif` VALUES ('Algèbre1',13,'Base d\'algèbre 1',1,3,24,24,NULL),('Analyse1',14,'Base d\'analyse 1',1,3,24,24,NULL),('MathDis',4,'Mathématiques discrètes',1,3,24,24,NULL),('ProbaStat',8,'Probabilité et Statistique',1,3,24,24,NULL);
/*!40000 ALTER TABLE `element_constitutif` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `element_constitutif_view`
--

DROP TABLE IF EXISTS `element_constitutif_view`;
/*!50001 DROP VIEW IF EXISTS `element_constitutif_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `element_constitutif_view` AS SELECT 
 1 AS `ecId`,
 1 AS `professeurId`,
 1 AS `ueId`,
 1 AS `ecDesign`,
 1 AS `ecCredit`,
 1 AS `ET`,
 1 AS `ED`,
 1 AS `EP`,
 1 AS `professeurPseudo`,
 1 AS `ueDesign`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `etudiant`
--

DROP TABLE IF EXISTS `etudiant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `etudiant` (
  `numMat` varchar(8) NOT NULL,
  `nom` varchar(64) NOT NULL,
  `prenom` varchar(64) DEFAULT NULL,
  `dateNaissance` date NOT NULL,
  `lieuNaisance` varchar(64) NOT NULL,
  `CIN` char(12) DEFAULT NULL,
  `cinDu` date DEFAULT NULL,
  `adresse` varchar(64) DEFAULT NULL,
  `numTelephone` char(10) NOT NULL,
  PRIMARY KEY (`numMat`),
  UNIQUE KEY `numTelephone_UNIQUE` (`numTelephone`),
  UNIQUE KEY `CIN_UNIQUE` (`CIN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etudiant`
--

LOCK TABLES `etudiant` WRITE;
/*!40000 ALTER TABLE `etudiant` DISABLE KEYS */;
INSERT INTO `etudiant` VALUES ('0000H-F','NOM','Prenom','1970-01-01','Ville','000000000000','1970-01-01','Adresse','0000000000');
/*!40000 ALTER TABLE `etudiant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grade`
--

DROP TABLE IF EXISTS `grade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grade` (
  `gradeId` varchar(8) NOT NULL,
  `gradeDesign` varchar(64) NOT NULL,
  PRIMARY KEY (`gradeId`),
  UNIQUE KEY `gradeDesign_UNIQUE` (`gradeDesign`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grade`
--

LOCK TABLES `grade` WRITE;
/*!40000 ALTER TABLE `grade` DISABLE KEYS */;
INSERT INTO `grade` VALUES ('AESR','Assistant de l\'Enseignement Supérieur et de Recherche'),('DrI','Docteur en Informatique'),('DaI','Doctorant en Informatique'),('MC','Maître de Conférences'),('Pr','Professeur'),('PrT','Professeur Titulaire');
/*!40000 ALTER TABLE `grade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groupe`
--

DROP TABLE IF EXISTS `groupe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groupe` (
  `groupeId` varchar(4) NOT NULL,
  `groupeDesign` varchar(32) NOT NULL,
  PRIMARY KEY (`groupeId`),
  UNIQUE KEY `groupe_UNIQUE` (`groupeId`),
  UNIQUE KEY `groupeDesign_UNIQUE` (`groupeDesign`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groupe`
--

LOCK TABLES `groupe` WRITE;
/*!40000 ALTER TABLE `groupe` DISABLE KEYS */;
INSERT INTO `groupe` VALUES ('G1','Groupe 1'),('G2','Groupe 2'),('G3','Groupe 3'),('G4','Groupe 4'),('G5','Groupe 5');
/*!40000 ALTER TABLE `groupe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mention`
--

DROP TABLE IF EXISTS `mention`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mention` (
  `mentionId` int NOT NULL AUTO_INCREMENT,
  `mentionDesign` varchar(64) NOT NULL,
  `mentionAcro` varchar(8) DEFAULT NULL,
  `professeurId` int DEFAULT NULL,
  PRIMARY KEY (`mentionId`),
  UNIQUE KEY `mentionDesign_UNIQUE` (`mentionDesign`),
  UNIQUE KEY `mentionAccro_UNIQUE` (`mentionAcro`),
  KEY `professeurId_idx` (`professeurId`),
  CONSTRAINT `professeurId` FOREIGN KEY (`professeurId`) REFERENCES `professeur` (`professeurId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mention`
--

LOCK TABLES `mention` WRITE;
/*!40000 ALTER TABLE `mention` DISABLE KEYS */;
INSERT INTO `mention` VALUES (1,'Informatique','Info',4),(2,'Intelligence Artificielle','IA',1);
/*!40000 ALTER TABLE `mention` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `mention_view`
--

DROP TABLE IF EXISTS `mention_view`;
/*!50001 DROP VIEW IF EXISTS `mention_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `mention_view` AS SELECT 
 1 AS `mentionId`,
 1 AS `professeurId`,
 1 AS `mentionDesign`,
 1 AS `mentionAcro`,
 1 AS `nom`,
 1 AS `prenom`,
 1 AS `pseudo`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `niveau`
--

DROP TABLE IF EXISTS `niveau`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `niveau` (
  `niveauId` varchar(4) NOT NULL,
  `niveauDesign` varchar(32) NOT NULL,
  PRIMARY KEY (`niveauId`),
  UNIQUE KEY `niveauId_UNIQUE` (`niveauId`),
  UNIQUE KEY `niveauDesign_UNIQUE` (`niveauDesign`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `niveau`
--

LOCK TABLES `niveau` WRITE;
/*!40000 ALTER TABLE `niveau` DISABLE KEYS */;
INSERT INTO `niveau` VALUES ('L1','Licence 1'),('L2','Licence 2'),('L3','Licence 3'),('M1','Master 1'),('M2','Master 2');
/*!40000 ALTER TABLE `niveau` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `note_etudiant`
--

DROP TABLE IF EXISTS `note_etudiant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `note_etudiant` (
  `numMat` varchar(8) NOT NULL,
  `seanceId` int NOT NULL,
  `note` double unsigned NOT NULL,
  PRIMARY KEY (`numMat`,`seanceId`),
  KEY `fk_ETUDIANT_has_UNITE_ENSEIGNEMENT_ETUDIANT1_idx` (`numMat`),
  KEY `seanceId_idx` (`seanceId`),
  CONSTRAINT `fk_ETUDIANT_has_UNITE_ENSEIGNEMENT_ETUDIANT1` FOREIGN KEY (`numMat`) REFERENCES `etudiant` (`numMat`),
  CONSTRAINT `seanceId` FOREIGN KEY (`seanceId`) REFERENCES `seance` (`seanceId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `note_etudiant`
--

LOCK TABLES `note_etudiant` WRITE;
/*!40000 ALTER TABLE `note_etudiant` DISABLE KEYS */;
INSERT INTO `note_etudiant` VALUES ('1407H-F',1,0);
/*!40000 ALTER TABLE `note_etudiant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `note_etudiant_view`
--

DROP TABLE IF EXISTS `note_etudiant_view`;
/*!50001 DROP VIEW IF EXISTS `note_etudiant_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `note_etudiant_view` AS SELECT 
 1 AS `seanceId`,
 1 AS `seanceDate`,
 1 AS `seanceDebut`,
 1 AS `seanceFin`,
 1 AS `classeId`,
 1 AS `salleId`,
 1 AS `ecId`,
 1 AS `tsId`,
 1 AS `tsDesign`,
 1 AS `numMat`,
 1 AS `nom`,
 1 AS `prenom`,
 1 AS `note`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `parcours`
--

DROP TABLE IF EXISTS `parcours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parcours` (
  `parcoursId` varchar(8) NOT NULL,
  `parcoursDesign` varchar(64) NOT NULL,
  `mentionId` int DEFAULT NULL,
  `professeurId` int DEFAULT NULL,
  PRIMARY KEY (`parcoursId`),
  UNIQUE KEY `parcoursDesign_UNIQUE` (`parcoursDesign`),
  UNIQUE KEY `parcoursId_UNIQUE` (`parcoursId`),
  KEY `responsableId_idx` (`professeurId`),
  KEY `mentionId_idx` (`mentionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parcours`
--

LOCK TABLES `parcours` WRITE;
/*!40000 ALTER TABLE `parcours` DISABLE KEYS */;
INSERT INTO `parcours` VALUES ('ASR','Administration des Systemes et Reseaux',1,20),('GB','Genie logiciel et Base de Donnees',1,8),('GID','Gouvernance et Ingenierie de Donnees',2,11),('IG','Informatique Generale',1,2),('OCC','Objets Connectees et Cybersecurites',2,15);
/*!40000 ALTER TABLE `parcours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `parcours_view`
--

DROP TABLE IF EXISTS `parcours_view`;
/*!50001 DROP VIEW IF EXISTS `parcours_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `parcours_view` AS SELECT 
 1 AS `parcoursId`,
 1 AS `mentionId`,
 1 AS `professeurId`,
 1 AS `parcoursDesign`,
 1 AS `mentionDesign`,
 1 AS `nom`,
 1 AS `prenom`,
 1 AS `pseudo`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `presence_etudiant`
--

DROP TABLE IF EXISTS `presence_etudiant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `presence_etudiant` (
  `numMat` varchar(8) NOT NULL,
  `seanceId` int NOT NULL,
  `estPresent` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`numMat`,`seanceId`),
  KEY `fk_ETUDIANT_has_COURS_COURS1_idx` (`seanceId`),
  KEY `fk_ETUDIANT_has_COURS_ETUDIANT1_idx` (`numMat`),
  CONSTRAINT `fk_ETUDIANT_has_COURS_COURS1` FOREIGN KEY (`seanceId`) REFERENCES `seance` (`seanceId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_ETUDIANT_has_COURS_ETUDIANT1` FOREIGN KEY (`numMat`) REFERENCES `etudiant` (`numMat`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `presence_etudiant`
--

LOCK TABLES `presence_etudiant` WRITE;
/*!40000 ALTER TABLE `presence_etudiant` DISABLE KEYS */;
INSERT INTO `presence_etudiant` VALUES ('1407H-F',1,0);
/*!40000 ALTER TABLE `presence_etudiant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professeur`
--

DROP TABLE IF EXISTS `professeur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professeur` (
  `professeurId` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(64) NOT NULL,
  `prenom` varchar(64) DEFAULT NULL,
  `pseudo` varchar(24) NOT NULL,
  `dateNaissance` date DEFAULT NULL,
  `lieuNaissance` varchar(64) DEFAULT NULL,
  `CIN` varchar(12) DEFAULT NULL,
  `cinDu` date DEFAULT NULL,
  `adresse` varchar(64) DEFAULT NULL,
  `numTelephone` char(10) DEFAULT NULL,
  `gradeId` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`professeurId`),
  UNIQUE KEY `pseudo_UNIQUE` (`pseudo`),
  UNIQUE KEY `numTelephone_UNIQUE` (`numTelephone`),
  KEY `gradeIdFkInProfesseur_idx` (`gradeId`),
  CONSTRAINT `gradeIdFkInProfesseur` FOREIGN KEY (`gradeId`) REFERENCES `grade` (`gradeId`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professeur`
--

LOCK TABLES `professeur` WRITE;
/*!40000 ALTER TABLE `professeur` DISABLE KEYS */;
INSERT INTO `professeur` VALUES (1,'DIMBISOA','William Germain','William',NULL,NULL,NULL,NULL,NULL,NULL,'DrI'),(2,'GESAZAFY','Gilante','Gilante',NULL,NULL,NULL,NULL,NULL,NULL,'AESR'),(3,'MAHATODY','Thomas','Thomas',NULL,NULL,NULL,NULL,NULL,NULL,'Pr'),(4,'RABETAFIKA','Louis Haja','Haja',NULL,NULL,NULL,NULL,NULL,NULL,'MC'),(5,'RAFAMANTANANTSOA','Fontaine','Fontaine',NULL,NULL,NULL,NULL,NULL,NULL,'Pr'),(6,'RAKOTOASIMBAHOAKA','Antsa Cyprienna','Antsa',NULL,NULL,NULL,NULL,NULL,NULL,'DrI'),(7,'RAKOTOASIMBAHOAKA','Cyprien Robert','Cyprien',NULL,NULL,NULL,NULL,NULL,NULL,'MC'),(8,'RALAIVAO','Jean Christian','Christian',NULL,NULL,NULL,NULL,NULL,NULL,'AESR'),(9,'RAMAMONJISOA','Bertin Olivier','Bertin',NULL,NULL,NULL,NULL,NULL,NULL,'PrT'),(10,'RANDRIANOMENJANAHARY','Ferdinand','Ferdinand',NULL,NULL,NULL,NULL,NULL,NULL,'AESR'),(11,'RATIANANTITRA','Volatiana Marielle','Volatiana',NULL,NULL,NULL,NULL,NULL,NULL,'DrI'),(12,'RATIARISON','Venot','Venot',NULL,NULL,NULL,NULL,NULL,NULL,'MC'),(13,'RATOVONDRAHONA','Josué','Josué',NULL,NULL,NULL,NULL,NULL,NULL,'DaI'),(14,'RASOLOARIJAONA','Madison','Madison',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,'RAZAFIMAHATRATRA','Hajarisena','Hajarisena',NULL,NULL,NULL,NULL,NULL,NULL,'DrI'),(16,'RALAMBOARISOA','Bénédicte','Bénédicte',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,'RAZAFINDRAIBE','Marolahy Alix','Alix',NULL,NULL,NULL,NULL,NULL,NULL,'DaI'),(18,'RAZAFINDRAMONJA','Clément Aubert','Clément',NULL,NULL,NULL,NULL,NULL,NULL,'AESR'),(19,'RAZAFINDRANDRIATSIMANIRY','Marie Dieudonné Michel','Michel',NULL,NULL,NULL,NULL,NULL,NULL,'MC'),(20,'SIAKA',NULL,'Siaka',NULL,NULL,NULL,NULL,NULL,NULL,'AESR'),(21,'TAREHY','Brice Evrard','Brice',NULL,NULL,NULL,NULL,NULL,NULL,'DrI');
/*!40000 ALTER TABLE `professeur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `professeur_view`
--

DROP TABLE IF EXISTS `professeur_view`;
/*!50001 DROP VIEW IF EXISTS `professeur_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `professeur_view` AS SELECT 
 1 AS `professeurId`,
 1 AS `nom`,
 1 AS `prenom`,
 1 AS `pseudo`,
 1 AS `dateNaissance`,
 1 AS `lieuNaissance`,
 1 AS `CIN`,
 1 AS `cinDu`,
 1 AS `adresse`,
 1 AS `numTelephone`,
 1 AS `gradeId`,
 1 AS `gradeDesign`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `salle`
--

DROP TABLE IF EXISTS `salle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salle` (
  `salleId` varchar(8) NOT NULL,
  `salleDesign` varchar(24) NOT NULL,
  `estAdministrative` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`salleId`),
  UNIQUE KEY `salleDesign_UNIQUE` (`salleDesign`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salle`
--

LOCK TABLES `salle` WRITE;
/*!40000 ALTER TABLE `salle` DISABLE KEYS */;
INSERT INTO `salle` VALUES ('S001','Salle 001',0);
/*!40000 ALTER TABLE `salle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seance`
--

DROP TABLE IF EXISTS `seance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seance` (
  `seanceId` int NOT NULL AUTO_INCREMENT,
  `seanceDate` date NOT NULL,
  `seanceDebut` time NOT NULL,
  `seanceFin` time NOT NULL,
  `classeId` varchar(16) NOT NULL,
  `salleId` varchar(8) NOT NULL,
  `ecId` varchar(16) NOT NULL,
  `tsId` int NOT NULL,
  PRIMARY KEY (`seanceId`),
  KEY `fk_SALLE_has_ELEMENT_CONSTITUTIF_ELEMENT_CONSTITUTIF1_idx` (`ecId`),
  KEY `fk_SALLE_has_ELEMENT_CONSTITUTIF_SALLE1_idx` (`salleId`),
  KEY `fk_SEANCE_TYPE_SEANCE1_idx` (`tsId`),
  KEY `classeIdFkInSeance_idx` (`classeId`),
  CONSTRAINT `classeIdFkInSeance` FOREIGN KEY (`classeId`) REFERENCES `classe` (`classeId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ecId` FOREIGN KEY (`ecId`) REFERENCES `element_constitutif` (`ecId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `salleId` FOREIGN KEY (`salleId`) REFERENCES `salle` (`salleId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tsId` FOREIGN KEY (`tsId`) REFERENCES `type_seance` (`tsId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seance`
--

LOCK TABLES `seance` WRITE;
/*!40000 ALTER TABLE `seance` DISABLE KEYS */;
INSERT INTO `seance` VALUES (1,'2024-04-20','09:00:00','10:30:00','L3IGG2','S001','Algèbre1',2);
/*!40000 ALTER TABLE `seance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `seance_view`
--

DROP TABLE IF EXISTS `seance_view`;
/*!50001 DROP VIEW IF EXISTS `seance_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `seance_view` AS SELECT 
 1 AS `seanceId`,
 1 AS `professeurId`,
 1 AS `tsId`,
 1 AS `seanceDate`,
 1 AS `seanceDebut`,
 1 AS `seanceFin`,
 1 AS `classeId`,
 1 AS `salleId`,
 1 AS `ecId`,
 1 AS `professeurPseudo`,
 1 AS `tsDesign`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `type_seance`
--

DROP TABLE IF EXISTS `type_seance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_seance` (
  `tsId` int NOT NULL AUTO_INCREMENT,
  `tsDesign` varchar(16) NOT NULL,
  PRIMARY KEY (`tsId`),
  UNIQUE KEY `tsDesign_UNIQUE` (`tsDesign`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_seance`
--

LOCK TABLES `type_seance` WRITE;
/*!40000 ALTER TABLE `type_seance` DISABLE KEYS */;
INSERT INTO `type_seance` VALUES (1,'Cours'),(2,'Examen'),(3,'Rattrapage');
/*!40000 ALTER TABLE `type_seance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unite_enseignement`
--

DROP TABLE IF EXISTS `unite_enseignement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unite_enseignement` (
  `ueId` int NOT NULL AUTO_INCREMENT,
  `ueDesign` varchar(64) NOT NULL,
  PRIMARY KEY (`ueId`),
  UNIQUE KEY `ueDesign_UNIQUE` (`ueDesign`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unite_enseignement`
--

LOCK TABLES `unite_enseignement` WRITE;
/*!40000 ALTER TABLE `unite_enseignement` DISABLE KEYS */;
INSERT INTO `unite_enseignement` VALUES (5,'Communication et Transversale'),(4,'Electroniques'),(2,'Langage de programmation et Technologie web'),(1,'Mathématiques pour l\'informatique'),(6,'Projet et Soutenance'),(3,'Système et Réseaux');
/*!40000 ALTER TABLE `unite_enseignement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unite_enseignement_attribut`
--

DROP TABLE IF EXISTS `unite_enseignement_attribut`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unite_enseignement_attribut` (
  `niveauId` varchar(4) NOT NULL,
  `parcoursId` varchar(8) NOT NULL,
  `ueId` int NOT NULL,
  PRIMARY KEY (`niveauId`,`parcoursId`,`ueId`),
  KEY `fk_NIVEAU_has_UNITE_ENSEIGNEMENT_UNITE_ENSEIGNEMENT1_idx` (`ueId`),
  KEY `fk_NIVEAU_has_UNITE_ENSEIGNEMENT_NIVEAU1_idx` (`niveauId`),
  KEY `fk_NIVEAU_has_UNITE_ENSEIGNEMENT_PARCOURS1_idx` (`parcoursId`),
  CONSTRAINT `fk_NIVEAU_has_UNITE_ENSEIGNEMENT_NIVEAU1` FOREIGN KEY (`niveauId`) REFERENCES `niveau` (`niveauId`),
  CONSTRAINT `fk_NIVEAU_has_UNITE_ENSEIGNEMENT_UNITE_ENSEIGNEMENT1` FOREIGN KEY (`ueId`) REFERENCES `unite_enseignement` (`ueId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unite_enseignement_attribut`
--

LOCK TABLES `unite_enseignement_attribut` WRITE;
/*!40000 ALTER TABLE `unite_enseignement_attribut` DISABLE KEYS */;
INSERT INTO `unite_enseignement_attribut` VALUES ('L1','IG',1);
/*!40000 ALTER TABLE `unite_enseignement_attribut` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `unite_enseignement_attribut_view`
--

DROP TABLE IF EXISTS `unite_enseignement_attribut_view`;
/*!50001 DROP VIEW IF EXISTS `unite_enseignement_attribut_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `unite_enseignement_attribut_view` AS SELECT 
 1 AS `niveauId`,
 1 AS `parcoursId`,
 1 AS `ueId`,
 1 AS `ueDesign`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `classe_etudiant_view`
--

/*!50001 DROP VIEW IF EXISTS `classe_etudiant_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `classe_etudiant_view` AS select concat(year(`au`.`auDeb`),' - ',year(`au`.`auFin`)) AS `anneeUniversitaire`,`c`.`classeId` AS `classeId`,`e`.`numMat` AS `numMat`,`e`.`nom` AS `nom`,`e`.`prenom` AS `prenom` from (((`classe_etudiant` `ce` join `annee_universitaire` `au` on((`au`.`auId` = `ce`.`auId`))) join `classe` `c` on((`c`.`classeId` = `ce`.`classeId`))) join `etudiant` `e` on((`e`.`numMat` = `ce`.`numMat`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `element_constitutif_view`
--

/*!50001 DROP VIEW IF EXISTS `element_constitutif_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `element_constitutif_view` AS select `ec`.`ecId` AS `ecId`,`p`.`professeurId` AS `professeurId`,`ue`.`ueId` AS `ueId`,`ec`.`ecDesign` AS `ecDesign`,`ec`.`ecCredit` AS `ecCredit`,`ec`.`ET` AS `ET`,`ec`.`ED` AS `ED`,`ec`.`EP` AS `EP`,`p`.`pseudo` AS `professeurPseudo`,`ue`.`ueDesign` AS `ueDesign` from ((`element_constitutif` `ec` join `professeur` `p` on((`p`.`professeurId` = `ec`.`professeurId`))) join `unite_enseignement` `ue` on((`ue`.`ueId` = `ec`.`ueId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `mention_view`
--

/*!50001 DROP VIEW IF EXISTS `mention_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `mention_view` AS select `m`.`mentionId` AS `mentionId`,`p`.`professeurId` AS `professeurId`,`m`.`mentionDesign` AS `mentionDesign`,`m`.`mentionAcro` AS `mentionAcro`,`p`.`nom` AS `nom`,`p`.`prenom` AS `prenom`,`p`.`pseudo` AS `pseudo` from (`mention` `m` join `professeur` `p` on((`p`.`professeurId` = `m`.`professeurId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `note_etudiant_view`
--

/*!50001 DROP VIEW IF EXISTS `note_etudiant_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `note_etudiant_view` AS select `s`.`seanceId` AS `seanceId`,`s`.`seanceDate` AS `seanceDate`,`s`.`seanceDebut` AS `seanceDebut`,`s`.`seanceFin` AS `seanceFin`,`s`.`classeId` AS `classeId`,`s`.`salleId` AS `salleId`,`s`.`ecId` AS `ecId`,`ts`.`tsId` AS `tsId`,`ts`.`tsDesign` AS `tsDesign`,`e`.`numMat` AS `numMat`,`e`.`nom` AS `nom`,`e`.`prenom` AS `prenom`,`ne`.`note` AS `note` from ((((`note_etudiant` `ne` join `etudiant` `e` on((`e`.`numMat` = `ne`.`numMat`))) join `seance` `s` on((`s`.`seanceId` = `ne`.`seanceId`))) join `element_constitutif` `ec` on((`s`.`ecId` = `ec`.`ecId`))) join `type_seance` `ts` on((`ts`.`tsId` = `s`.`tsId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `parcours_view`
--

/*!50001 DROP VIEW IF EXISTS `parcours_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `parcours_view` AS select `pa`.`parcoursId` AS `parcoursId`,`m`.`mentionId` AS `mentionId`,`pr`.`professeurId` AS `professeurId`,`pa`.`parcoursDesign` AS `parcoursDesign`,`m`.`mentionDesign` AS `mentionDesign`,`pr`.`nom` AS `nom`,`pr`.`prenom` AS `prenom`,`pr`.`pseudo` AS `pseudo` from ((`parcours` `pa` left join `mention` `m` on((`m`.`mentionId` = `pa`.`mentionId`))) left join `professeur` `pr` on((`pa`.`professeurId` = `pr`.`professeurId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `professeur_view`
--

/*!50001 DROP VIEW IF EXISTS `professeur_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `professeur_view` AS select `p`.`professeurId` AS `professeurId`,`p`.`nom` AS `nom`,`p`.`prenom` AS `prenom`,`p`.`pseudo` AS `pseudo`,`p`.`dateNaissance` AS `dateNaissance`,`p`.`lieuNaissance` AS `lieuNaissance`,`p`.`CIN` AS `CIN`,`p`.`cinDu` AS `cinDu`,`p`.`adresse` AS `adresse`,`p`.`numTelephone` AS `numTelephone`,`g`.`gradeId` AS `gradeId`,`g`.`gradeDesign` AS `gradeDesign` from (`professeur` `p` left join `grade` `g` on((`g`.`gradeId` = `p`.`gradeId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `seance_view`
--

/*!50001 DROP VIEW IF EXISTS `seance_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `seance_view` AS select `s`.`seanceId` AS `seanceId`,`p`.`professeurId` AS `professeurId`,`ts`.`tsId` AS `tsId`,`s`.`seanceDate` AS `seanceDate`,`s`.`seanceDebut` AS `seanceDebut`,`s`.`seanceFin` AS `seanceFin`,`s`.`classeId` AS `classeId`,`s`.`salleId` AS `salleId`,`ec`.`ecId` AS `ecId`,`p`.`pseudo` AS `professeurPseudo`,`ts`.`tsDesign` AS `tsDesign` from (((`seance` `s` join `element_constitutif` `ec` on((`ec`.`ecId` = `s`.`ecId`))) join `professeur` `p` on((`p`.`professeurId` = `ec`.`professeurId`))) join `type_seance` `ts` on((`ts`.`tsId` = `s`.`tsId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `unite_enseignement_attribut_view`
--

/*!50001 DROP VIEW IF EXISTS `unite_enseignement_attribut_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `unite_enseignement_attribut_view` AS select `uea`.`niveauId` AS `niveauId`,`uea`.`parcoursId` AS `parcoursId`,`ue`.`ueId` AS `ueId`,`ue`.`ueDesign` AS `ueDesign` from (`unite_enseignement_attribut` `uea` join `unite_enseignement` `ue` on((`ue`.`ueId` = `uea`.`ueId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-19  7:51:48
