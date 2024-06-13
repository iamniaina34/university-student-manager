-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 13, 2024 at 03:33 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student-manager-database`
--

-- --------------------------------------------------------

--
-- Table structure for table `annee_universitaire`
--

DROP TABLE IF EXISTS `annee_universitaire`;
CREATE TABLE IF NOT EXISTS `annee_universitaire` (
  `au_id` int NOT NULL AUTO_INCREMENT,
  `au_debut` date NOT NULL,
  `au_fin` date NOT NULL,
  PRIMARY KEY (`au_id`),
  UNIQUE KEY `auDeb_UNIQUE` (`au_debut`),
  UNIQUE KEY `auFin_UNIQUE` (`au_fin`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `annee_universitaire`
--

INSERT INTO `annee_universitaire` (`au_id`, `au_debut`, `au_fin`) VALUES
(1, '2021-10-01', '2022-10-01'),
(2, '2022-10-01', '2023-10-01'),
(3, '2023-10-01', '2024-10-01');

-- --------------------------------------------------------

--
-- Table structure for table `cg_etudiant`
--

DROP TABLE IF EXISTS `cg_etudiant`;
CREATE TABLE IF NOT EXISTS `cg_etudiant` (
  `au_id` int NOT NULL,
  `etudiant_id` int NOT NULL,
  `classe_id` int NOT NULL,
  `groupe_id` int DEFAULT NULL,
  PRIMARY KEY (`au_id`,`etudiant_id`),
  KEY `auId_idx` (`au_id`),
  KEY `classe_id_fk_in_classe_etudiant_idx` (`classe_id`),
  KEY `groupe_id_fk_in_cge_idx` (`groupe_id`),
  KEY `etudiant_id_fk_in_cge_idx` (`etudiant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `cg_etudiant`
--

INSERT INTO `cg_etudiant` (`au_id`, `etudiant_id`, `classe_id`, `groupe_id`) VALUES
(1, 2, 3, 2),
(2, 2, 6, 2),
(3, 2, 9, 2);

-- --------------------------------------------------------

--
-- Stand-in structure for view `cg_etudiant_view`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `cg_etudiant_view`;
CREATE TABLE IF NOT EXISTS `cg_etudiant_view` (
`annee_universitaire` varchar(11)
,`au_debut` date
,`au_fin` date
,`au_id` int
,`classe_id` int
,`etudiant_id` int
,`groupe_acro` varchar(4)
,`groupe_id` int
,`niveau_acro` varchar(4)
,`niveau_id` int
,`nom` varchar(64)
,`num_mat` varchar(8)
,`parcours_acro` varchar(8)
,`parcours_id` int
,`prenom` varchar(64)
);

-- --------------------------------------------------------

--
-- Table structure for table `classe`
--

DROP TABLE IF EXISTS `classe`;
CREATE TABLE IF NOT EXISTS `classe` (
  `classe_id` int NOT NULL AUTO_INCREMENT,
  `niveau_id` int NOT NULL,
  `parcours_id` int NOT NULL,
  `nombre_groupe` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`classe_id`),
  KEY `fk_NIVEAU_has_PARCOURS_PARCOURS1_idx` (`parcours_id`),
  KEY `niveau_id_fk_in_classe_idx` (`niveau_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `classe`
--

INSERT INTO `classe` (`classe_id`, `niveau_id`, `parcours_id`, `nombre_groupe`) VALUES
(1, 1, 1, 3),
(2, 1, 2, 3),
(3, 1, 3, 3),
(4, 2, 1, 3),
(5, 2, 2, 3),
(6, 2, 3, 3),
(7, 3, 1, 3),
(8, 3, 2, 3),
(9, 3, 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `classe_groupe`
--

DROP TABLE IF EXISTS `classe_groupe`;
CREATE TABLE IF NOT EXISTS `classe_groupe` (
  `classe_id` int NOT NULL,
  `groupe_id` int NOT NULL,
  PRIMARY KEY (`groupe_id`,`classe_id`),
  KEY `classe_id_fk_in_cg_idx` (`classe_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `classe_groupe`
--

INSERT INTO `classe_groupe` (`classe_id`, `groupe_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(3, 2),
(3, 3),
(4, 1),
(4, 2),
(4, 3),
(5, 1),
(5, 2),
(5, 3),
(6, 1),
(6, 2),
(6, 3),
(7, 1),
(7, 2),
(7, 3),
(8, 1),
(8, 2),
(8, 3),
(9, 1),
(9, 2),
(9, 3);

-- --------------------------------------------------------

--
-- Stand-in structure for view `classe_groupe_view`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `classe_groupe_view`;
CREATE TABLE IF NOT EXISTS `classe_groupe_view` (
`classe_id` int
,`groupe_acro` varchar(4)
,`groupe_id` int
,`niveau_acro` varchar(4)
,`niveau_id` int
,`parcours_acro` varchar(8)
,`parcours_id` int
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `classe_view`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `classe_view`;
CREATE TABLE IF NOT EXISTS `classe_view` (
`classe_id` int
,`niveau_acro` varchar(4)
,`niveau_id` int
,`nombre_groupe` int
,`parcours_acro` varchar(8)
,`parcours_id` int
);

-- --------------------------------------------------------

--
-- Table structure for table `element_constitutif`
--

DROP TABLE IF EXISTS `element_constitutif`;
CREATE TABLE IF NOT EXISTS `element_constitutif` (
  `ec_id` int NOT NULL AUTO_INCREMENT,
  `professeur_id` int DEFAULT NULL,
  `ue_id` int DEFAULT NULL,
  `ec_design` varchar(64) NOT NULL,
  `ec_acro` varchar(16) NOT NULL,
  `ec_credit` int NOT NULL,
  `et` int DEFAULT NULL,
  `ed` int DEFAULT NULL,
  `ep` int DEFAULT NULL,
  PRIMARY KEY (`ec_id`),
  UNIQUE KEY `ec_acro_UNIQUE` (`ec_acro`),
  KEY `ueId_idx` (`ue_id`),
  KEY `professeurIdFkInElement_constitutif_idx` (`professeur_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `element_constitutif`
--

INSERT INTO `element_constitutif` (`ec_id`, `professeur_id`, `ue_id`, `ec_design`, `ec_acro`, `ec_credit`, `et`, `ed`, `ep`) VALUES
(1, 15, 1, 'Base d\'algèbre 1', 'Algèbre1', 3, 24, 24, NULL),
(2, 3, 1, 'Base d\'analyse 1', 'Analyse1', 3, 24, 24, NULL),
(3, 12, 1, 'Mathématiques discrètes', 'MathDis', 3, 24, 24, NULL),
(4, 6, 1, 'Probabilité et Statistique', 'ProbaStat', 3, 24, 24, NULL);

-- --------------------------------------------------------

--
-- Stand-in structure for view `element_constitutif_view`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `element_constitutif_view`;
CREATE TABLE IF NOT EXISTS `element_constitutif_view` (
`ec_acro` varchar(16)
,`ec_credit` int
,`ec_design` varchar(64)
,`ec_id` int
,`ed` int
,`ep` int
,`et` int
,`professeur_id` int
,`ue_design` varchar(64)
,`ue_id` int
);

-- --------------------------------------------------------

--
-- Table structure for table `etudiant`
--

DROP TABLE IF EXISTS `etudiant`;
CREATE TABLE IF NOT EXISTS `etudiant` (
  `etudiant_id` int NOT NULL AUTO_INCREMENT,
  `num_mat` varchar(8) NOT NULL,
  `nom` varchar(64) NOT NULL,
  `prenom` varchar(64) DEFAULT NULL,
  `date_naissance` date NOT NULL,
  `lieu_naissance` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `cin` char(12) DEFAULT NULL,
  `cin_du` date DEFAULT NULL,
  `adresse` varchar(64) DEFAULT NULL,
  `numero_telephone` char(10) DEFAULT NULL,
  PRIMARY KEY (`etudiant_id`),
  UNIQUE KEY `num_mat_UNIQUE` (`num_mat`),
  UNIQUE KEY `numTelephone_UNIQUE` (`numero_telephone`),
  UNIQUE KEY `CIN_UNIQUE` (`cin`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `etudiant`
--

INSERT INTO `etudiant` (`etudiant_id`, `num_mat`, `nom`, `prenom`, `date_naissance`, `lieu_naissance`, `cin`, `cin_du`, `adresse`, `numero_telephone`) VALUES
(1, '0000H-F', 'UNKNOWN', 'Last Name', '1970-01-01', 'Unknown', 'xxxxxxxxxxxx', '1970-01-01', 'Unknown', 'xxxxxxxxxx'),
(2, '1407H-F', 'ANDRIANIAINA', 'Mandrindra', '2004-02-20', 'Ambohimahasoa', '206011016997', '2022-06-15', 'Antanifotsy 5, Fianarantsoa', '0323512715'),
(3, '1408H-F', 'ANDRIANIAINAKELY', 'Mandrindrabe', '2004-02-20', 'Ambohimahasoa', '206011016998', '2022-06-15', 'Antanifotsy 5, Fianarantsoa', '0323512716'),
(6, '1409H-F', 'ANDRIANIAINAKELY', 'Mandrindrabe', '2004-02-20', 'Ambohimahasoa', '206011016999', '2022-06-15', 'Antanifotsy 5, Fianarantsoa', '0323512717'),
(53, '1419H-F', 'ANDRIANIAINAKELY', 'Mandrindrabe', '2004-02-20', 'Ambohimahasoa', '206011016919', '2022-06-15', 'Antanifotsy 5, Fianarantsoa', '0323512617'),
(55, '1489H-F', 'ANDRIANIAINAKELY', 'Mandrindrabe', '2004-02-20', 'Ambohimahasoa', '206011401619', '2022-06-15', 'Antanifotsy 5, Fianarantsoa', '0333512617'),
(57, '1487H-F', 'ANDRIANIAINAKELY', 'Mandrindrabe', '2004-02-20', 'Ambohimahasoa', NULL, '2022-06-15', 'Antanifotsy 5, Fianarantsoa', '0373512617'),
(61, '1490H-F', 'ANDRIANIAINAKELY', 'Mandrindrabe', '2004-02-20', 'Ambohimahasoa', '206011401699', '2022-06-15', 'Antanifotsy 5, Fianarantsoa', '0373512618'),
(62, '1491H-F', 'ANDRIANIAINAKELY', 'Mandrindrabe', '2004-02-20', 'Ambohimahasoa', '206011401700', '2022-06-15', 'Antanifotsy 5, Fianarantsoa', '0373512619'),
(64, '1492H-F', 'ANDRIANIAINAKELY', 'Mandrindrabe', '2004-02-20', 'Ambohimahasoa', NULL, '2022-06-15', 'Antanifotsy 5, Fianarantsoa', '0373512620');

-- --------------------------------------------------------

--
-- Table structure for table `etudiant_seq`
--

DROP TABLE IF EXISTS `etudiant_seq`;
CREATE TABLE IF NOT EXISTS `etudiant_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `etudiant_seq`
--

INSERT INTO `etudiant_seq` (`next_val`) VALUES
(151);

-- --------------------------------------------------------

--
-- Table structure for table `grade`
--

DROP TABLE IF EXISTS `grade`;
CREATE TABLE IF NOT EXISTS `grade` (
  `grade_id` int NOT NULL AUTO_INCREMENT,
  `grade_acro` varchar(8) NOT NULL,
  `grade_design` varchar(64) NOT NULL,
  PRIMARY KEY (`grade_id`),
  UNIQUE KEY `gradeDesign_UNIQUE` (`grade_design`),
  UNIQUE KEY `grade_acro_UNIQUE` (`grade_acro`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `grade`
--

INSERT INTO `grade` (`grade_id`, `grade_acro`, `grade_design`) VALUES
(1, 'AESR', 'Assistant de l\'Enseignement Supérieur et de Recherche'),
(2, 'DaI', 'Doctorant en Informatique'),
(3, 'DrI', 'Docteur en Informatique'),
(4, 'MC', 'Maître de Conférences'),
(5, 'Pr', 'Professeur'),
(6, 'PrT', 'Professeur Titulaire');

-- --------------------------------------------------------

--
-- Table structure for table `groupe`
--

DROP TABLE IF EXISTS `groupe`;
CREATE TABLE IF NOT EXISTS `groupe` (
  `groupe_id` int NOT NULL AUTO_INCREMENT,
  `groupe_acro` varchar(4) NOT NULL,
  `groupe_design` varchar(32) NOT NULL,
  PRIMARY KEY (`groupe_id`),
  UNIQUE KEY `groupe_UNIQUE` (`groupe_acro`),
  UNIQUE KEY `groupeDesign_UNIQUE` (`groupe_design`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `groupe`
--

INSERT INTO `groupe` (`groupe_id`, `groupe_acro`, `groupe_design`) VALUES
(1, 'G1', 'Groupe 1'),
(2, 'G2', 'Groupe 2'),
(3, 'G3', 'Groupe 3'),
(4, 'G4', 'Groupe 4'),
(5, 'G5', 'Groupe 5');

-- --------------------------------------------------------

--
-- Table structure for table `mention`
--

DROP TABLE IF EXISTS `mention`;
CREATE TABLE IF NOT EXISTS `mention` (
  `mention_id` int NOT NULL AUTO_INCREMENT,
  `mention_acro` varchar(8) NOT NULL,
  `mention_design` varchar(64) NOT NULL,
  `professeur_id` int DEFAULT NULL,
  PRIMARY KEY (`mention_id`),
  UNIQUE KEY `mentionDesign_UNIQUE` (`mention_design`),
  KEY `professeurIdFkInMention_idx` (`professeur_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `mention`
--

INSERT INTO `mention` (`mention_id`, `mention_acro`, `mention_design`, `professeur_id`) VALUES
(1, 'Info', 'Informatique', 12),
(2, 'IA', 'Intelligence Artificielle', 21);

-- --------------------------------------------------------

--
-- Stand-in structure for view `mention_view`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `mention_view`;
CREATE TABLE IF NOT EXISTS `mention_view` (
`mention_design` varchar(64)
,`mention_id` int
,`nom` varchar(64)
,`prenom` varchar(64)
,`professeur_id` int
,`professeur_pseudo` varchar(16)
);

-- --------------------------------------------------------

--
-- Table structure for table `niveau`
--

DROP TABLE IF EXISTS `niveau`;
CREATE TABLE IF NOT EXISTS `niveau` (
  `niveau_id` int NOT NULL AUTO_INCREMENT,
  `niveau_design` varchar(32) NOT NULL,
  `niveau_acro` varchar(4) NOT NULL,
  PRIMARY KEY (`niveau_id`),
  UNIQUE KEY `niveauId_UNIQUE` (`niveau_acro`),
  UNIQUE KEY `niveauDesign_UNIQUE` (`niveau_design`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `niveau`
--

INSERT INTO `niveau` (`niveau_id`, `niveau_design`, `niveau_acro`) VALUES
(1, 'Licence 1', 'L1'),
(2, 'Licence 2', 'L2'),
(3, 'Licence 3', 'L3'),
(4, 'Master 1', 'M1'),
(5, 'Master 2', 'M2');

-- --------------------------------------------------------

--
-- Table structure for table `note_etudiant`
--

DROP TABLE IF EXISTS `note_etudiant`;
CREATE TABLE IF NOT EXISTS `note_etudiant` (
  `etudiant_id` int NOT NULL,
  `seance_id` int NOT NULL,
  `note` double UNSIGNED NOT NULL,
  PRIMARY KEY (`etudiant_id`,`seance_id`),
  KEY `fk_ETUDIANT_has_UNITE_ENSEIGNEMENT_ETUDIANT1_idx` (`etudiant_id`),
  KEY `seanceId_idx` (`seance_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Stand-in structure for view `note_etudiant_view`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `note_etudiant_view`;
CREATE TABLE IF NOT EXISTS `note_etudiant_view` (
`ec_acro` varchar(16)
,`ec_id` int
,`etudiant_id` int
,`niveau_acro` varchar(4)
,`niveau_id` int
,`nom` varchar(64)
,`note` double unsigned
,`num_mat` varchar(8)
,`parcours_acro` varchar(8)
,`parcours_id` int
,`prenom` varchar(64)
,`salle_acro` varchar(8)
,`seance_date` date
,`seance_id` int
,`ts_design` varchar(16)
,`ts_id` int
);

-- --------------------------------------------------------

--
-- Table structure for table `parcours`
--

DROP TABLE IF EXISTS `parcours`;
CREATE TABLE IF NOT EXISTS `parcours` (
  `parcours_id` int NOT NULL AUTO_INCREMENT,
  `mention_id` int NOT NULL,
  `professeur_id` int DEFAULT NULL,
  `parcours_design` varchar(64) NOT NULL,
  `parcours_acro` varchar(8) NOT NULL,
  PRIMARY KEY (`parcours_id`),
  UNIQUE KEY `parcoursDesign_UNIQUE` (`parcours_design`),
  UNIQUE KEY `parcoursId_UNIQUE` (`parcours_acro`),
  KEY `professeur_id_fk_in_parcours_idx` (`professeur_id`),
  KEY `mention_id_fk_in_parcours_idx` (`mention_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `parcours`
--

INSERT INTO `parcours` (`parcours_id`, `mention_id`, `professeur_id`, `parcours_design`, `parcours_acro`) VALUES
(1, 1, 17, 'Administration des Systemes et Reseaux', 'ASR'),
(2, 1, 6, 'Genie logiciel et Base de Donnees', 'GB'),
(3, 1, 11, 'Informatique Generale', 'IG'),
(4, 2, 20, 'Gouvernance et Ingenierie de Donnees', 'GID'),
(5, 2, 13, 'Objets Connectees et Cybersecurites', 'OCC');

-- --------------------------------------------------------

--
-- Stand-in structure for view `parcours_view`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `parcours_view`;
CREATE TABLE IF NOT EXISTS `parcours_view` (
`mention_design` varchar(64)
,`mention_id` int
,`nom` varchar(64)
,`parcours_design` varchar(64)
,`parcours_id` int
,`prenom` varchar(64)
,`professeur_id` int
,`professeur_pseudo` varchar(16)
);

-- --------------------------------------------------------

--
-- Table structure for table `presence_etudiant`
--

DROP TABLE IF EXISTS `presence_etudiant`;
CREATE TABLE IF NOT EXISTS `presence_etudiant` (
  `etudiant_id` int NOT NULL,
  `seance_id` int NOT NULL,
  `est_present` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`etudiant_id`,`seance_id`),
  KEY `fk_ETUDIANT_has_COURS_COURS1_idx` (`seance_id`),
  KEY `fk_ETUDIANT_has_COURS_ETUDIANT1_idx` (`etudiant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Stand-in structure for view `presence_etudiant_view`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `presence_etudiant_view`;
CREATE TABLE IF NOT EXISTS `presence_etudiant_view` (
`ec_acro` varchar(16)
,`ec_id` int
,`est_present` tinyint
,`etudiant_id` int
,`groupe_acro` varchar(4)
,`groupe_id` int
,`niveau_acro` varchar(4)
,`niveau_id` int
,`nom` varchar(64)
,`num_mat` varchar(8)
,`parcours_acro` varchar(8)
,`parcours_id` int
,`prenom` varchar(64)
,`professeur_id` int
,`salle_acro` varchar(8)
,`salle_id` int
,`seance_date` date
,`seance_debut` time
,`seance_fin` time
,`seance_id` int
,`ts_design` varchar(16)
,`ts_id` int
);

-- --------------------------------------------------------

--
-- Table structure for table `professeur`
--

DROP TABLE IF EXISTS `professeur`;
CREATE TABLE IF NOT EXISTS `professeur` (
  `professeur_id` int NOT NULL AUTO_INCREMENT,
  `grade_id` int DEFAULT NULL,
  `nom` varchar(64) NOT NULL,
  `prenom` varchar(64) DEFAULT NULL,
  `professeur_pseudo` varchar(16) NOT NULL,
  `date_naissance` date DEFAULT NULL,
  `lieu_naissance` varchar(64) DEFAULT NULL,
  `cin` char(12) DEFAULT NULL,
  `cin_du` date DEFAULT NULL,
  `adresse` varchar(64) DEFAULT NULL,
  `numero_telephone` char(10) DEFAULT NULL,
  PRIMARY KEY (`professeur_id`),
  UNIQUE KEY `numTelephone_UNIQUE` (`numero_telephone`),
  KEY `grade_id_fk_in_professeur_idx` (`grade_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `professeur`
--

INSERT INTO `professeur` (`professeur_id`, `grade_id`, `nom`, `prenom`, `professeur_pseudo`, `date_naissance`, `lieu_naissance`, `cin`, `cin_du`, `adresse`, `numero_telephone`) VALUES
(1, 2, 'RAZAFINDRAIBE', 'Marolahy Alix', 'Alix', NULL, NULL, NULL, NULL, NULL, NULL),
(2, 3, 'RAKOTOASIMBAHOAKA', 'Antsa Cyprienna', 'Antsa', NULL, NULL, NULL, NULL, NULL, NULL),
(3, NULL, 'RALAMBOARISOA', 'Bénédicte', 'Bénédicte', NULL, NULL, NULL, NULL, NULL, NULL),
(4, 6, 'RAMAMONJISOA', 'Bertin Olivier', 'Bertin', NULL, NULL, NULL, NULL, NULL, NULL),
(5, 3, 'TAREHY', 'Brice Evrard', 'Brice', NULL, NULL, NULL, NULL, NULL, NULL),
(6, 1, 'RALAIVAO', 'Jean Christian', 'Christian', NULL, NULL, NULL, NULL, NULL, NULL),
(7, 1, 'RAZAFINDRAMONJA', 'Clément Aubert', 'Clément', NULL, NULL, NULL, NULL, NULL, NULL),
(8, 4, 'RAKOTOASIMBAHOAKA', 'Cyprien Robert', 'Cyprien', NULL, NULL, NULL, NULL, NULL, NULL),
(9, 1, 'RANDRIANOMENJANAHARY', 'Ferdinand', 'Ferdinand', NULL, NULL, NULL, NULL, NULL, NULL),
(10, 5, 'RAFAMANTANANTSOA', 'Fontaine', 'Fontaine', NULL, NULL, NULL, NULL, NULL, NULL),
(11, 1, 'GESAZAFY', 'Gilante', 'Gilante', NULL, NULL, NULL, NULL, NULL, NULL),
(12, 4, 'RABETAFIKA', 'Louis Haja', 'Haja', NULL, NULL, NULL, NULL, NULL, NULL),
(13, 3, 'RAZAFIMAHATRATRA', 'Hajarisena', 'Hajarisena', NULL, NULL, NULL, NULL, NULL, NULL),
(14, 2, 'RATOVONDRAHONA', 'Josué', 'Josué', NULL, NULL, NULL, NULL, NULL, NULL),
(15, NULL, 'RASOLOARIJAONA', 'Madison', 'Madison', NULL, NULL, NULL, NULL, NULL, NULL),
(16, 4, 'RAZAFINDRANDRIATSIMANIRY', 'Marie Dieudonné Michel', 'Michel', NULL, NULL, NULL, NULL, NULL, NULL),
(17, 1, 'SIAKA', NULL, 'Siaka', NULL, NULL, NULL, NULL, NULL, NULL),
(18, 5, 'MAHATODY', 'Thomas', 'Thomas', NULL, NULL, NULL, NULL, NULL, NULL),
(19, 4, 'RATIARISON', 'Venot', 'Venot', NULL, NULL, NULL, NULL, NULL, NULL),
(20, 3, 'RATIANANTITRA', 'Volatiana Marielle', 'Volatiana', NULL, NULL, NULL, NULL, NULL, NULL),
(21, 3, 'DIMBISOA', 'William Germain', 'William', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Stand-in structure for view `professeur_view`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `professeur_view`;
CREATE TABLE IF NOT EXISTS `professeur_view` (
`adresse` varchar(64)
,`cin` char(12)
,`cin_du` date
,`date_naissance` date
,`grade_design` varchar(64)
,`grade_id` int
,`lieu_naissance` varchar(64)
,`nom` varchar(64)
,`numero_telephone` char(10)
,`prenom` varchar(64)
,`professeur_id` int
);

-- --------------------------------------------------------

--
-- Table structure for table `salle`
--

DROP TABLE IF EXISTS `salle`;
CREATE TABLE IF NOT EXISTS `salle` (
  `salle_id` int NOT NULL AUTO_INCREMENT,
  `salle_design` varchar(24) NOT NULL,
  `salle_acro` varchar(8) NOT NULL,
  `est_administrative` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`salle_id`),
  UNIQUE KEY `salleDesign_UNIQUE` (`salle_design`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `salle`
--

INSERT INTO `salle` (`salle_id`, `salle_design`, `salle_acro`, `est_administrative`) VALUES
(1, 'Salle 001', 'S001', 0);

-- --------------------------------------------------------

--
-- Table structure for table `seance`
--

DROP TABLE IF EXISTS `seance`;
CREATE TABLE IF NOT EXISTS `seance` (
  `seance_id` int NOT NULL AUTO_INCREMENT,
  `classe_id` int NOT NULL,
  `groupe_id` int NOT NULL,
  `ec_id` int NOT NULL,
  `salle_id` int NOT NULL,
  `ts_id` int NOT NULL,
  `seance_date` date NOT NULL,
  `seance_debut` time NOT NULL,
  `seance_fin` time NOT NULL,
  PRIMARY KEY (`seance_id`),
  KEY `fk_SEANCE_TYPE_SEANCE1_idx` (`ts_id`),
  KEY `classeIdFkInSeance_idx` (`classe_id`),
  KEY `ec_id_fk_in_seance_idx` (`ec_id`),
  KEY `groupe_id_fk_in_seance_idx` (`groupe_id`),
  KEY `salle_id_fk_in_seance_idx` (`salle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Stand-in structure for view `seance_view`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `seance_view`;
CREATE TABLE IF NOT EXISTS `seance_view` (
`ec_acro` varchar(16)
,`ec_id` int
,`groupe_acro` varchar(4)
,`groupe_id` int
,`niveau_acro` varchar(4)
,`niveau_id` int
,`parcours_acro` varchar(8)
,`parcours_id` int
,`professeur_id` int
,`salle_acro` varchar(8)
,`salle_id` int
,`seance_date` date
,`seance_debut` time
,`seance_fin` time
,`seance_id` int
,`ts_design` varchar(16)
,`ts_id` int
);

-- --------------------------------------------------------

--
-- Table structure for table `type_seance`
--

DROP TABLE IF EXISTS `type_seance`;
CREATE TABLE IF NOT EXISTS `type_seance` (
  `ts_id` int NOT NULL AUTO_INCREMENT,
  `ts_design` varchar(16) NOT NULL,
  PRIMARY KEY (`ts_id`),
  UNIQUE KEY `tsDesign_UNIQUE` (`ts_design`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `type_seance`
--

INSERT INTO `type_seance` (`ts_id`, `ts_design`) VALUES
(1, 'Cours'),
(2, 'Examen'),
(3, 'Rattrapage');

-- --------------------------------------------------------

--
-- Table structure for table `ue_attribut`
--

DROP TABLE IF EXISTS `ue_attribut`;
CREATE TABLE IF NOT EXISTS `ue_attribut` (
  `ue_id` int NOT NULL,
  `classe_id` int NOT NULL,
  PRIMARY KEY (`ue_id`,`classe_id`),
  KEY `fk_NIVEAU_has_UNITE_ENSEIGNEMENT_UNITE_ENSEIGNEMENT1_idx` (`ue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `ue_attribut`
--

INSERT INTO `ue_attribut` (`ue_id`, `classe_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Stand-in structure for view `ue_attribut_view`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `ue_attribut_view`;
CREATE TABLE IF NOT EXISTS `ue_attribut_view` (
`niveau_acro` varchar(4)
,`niveau_id` int
,`parcours_acro` varchar(8)
,`parcours_id` int
,`ue_design` varchar(64)
,`ue_id` int
);

-- --------------------------------------------------------

--
-- Table structure for table `unite_enseignement`
--

DROP TABLE IF EXISTS `unite_enseignement`;
CREATE TABLE IF NOT EXISTS `unite_enseignement` (
  `ue_id` int NOT NULL AUTO_INCREMENT,
  `ue_design` varchar(64) NOT NULL,
  PRIMARY KEY (`ue_id`),
  UNIQUE KEY `ueDesign_UNIQUE` (`ue_design`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `unite_enseignement`
--

INSERT INTO `unite_enseignement` (`ue_id`, `ue_design`) VALUES
(5, 'Communication et Transversale'),
(4, 'Electroniques'),
(2, 'Langage de programmation et Technologie web'),
(1, 'Mathématiques pour l\'informatique'),
(6, 'Projet et Soutenance'),
(3, 'Système et Réseaux');

-- --------------------------------------------------------

--
-- Structure for view `cg_etudiant_view`
--
DROP TABLE IF EXISTS `cg_etudiant_view`;
-- Error reading structure for table student-manager-database.cg_etudiant_view: #1142 - SHOW VIEW command denied to user 'usr'@'localhost' for table 'cg_etudiant_view'

-- --------------------------------------------------------

--
-- Structure for view `classe_groupe_view`
--
DROP TABLE IF EXISTS `classe_groupe_view`;
-- Error reading structure for table student-manager-database.classe_groupe_view: #1142 - SHOW VIEW command denied to user 'usr'@'localhost' for table 'classe_groupe_view'

-- --------------------------------------------------------

--
-- Structure for view `classe_view`
--
DROP TABLE IF EXISTS `classe_view`;
-- Error reading structure for table student-manager-database.classe_view: #1142 - SHOW VIEW command denied to user 'usr'@'localhost' for table 'classe_view'

-- --------------------------------------------------------

--
-- Structure for view `element_constitutif_view`
--
DROP TABLE IF EXISTS `element_constitutif_view`;
-- Error reading structure for table student-manager-database.element_constitutif_view: #1142 - SHOW VIEW command denied to user 'usr'@'localhost' for table 'element_constitutif_view'

-- --------------------------------------------------------

--
-- Structure for view `mention_view`
--
DROP TABLE IF EXISTS `mention_view`;
-- Error reading structure for table student-manager-database.mention_view: #1142 - SHOW VIEW command denied to user 'usr'@'localhost' for table 'mention_view'

-- --------------------------------------------------------

--
-- Structure for view `note_etudiant_view`
--
DROP TABLE IF EXISTS `note_etudiant_view`;
-- Error reading structure for table student-manager-database.note_etudiant_view: #1142 - SHOW VIEW command denied to user 'usr'@'localhost' for table 'note_etudiant_view'

-- --------------------------------------------------------

--
-- Structure for view `parcours_view`
--
DROP TABLE IF EXISTS `parcours_view`;
-- Error reading structure for table student-manager-database.parcours_view: #1142 - SHOW VIEW command denied to user 'usr'@'localhost' for table 'parcours_view'

-- --------------------------------------------------------

--
-- Structure for view `presence_etudiant_view`
--
DROP TABLE IF EXISTS `presence_etudiant_view`;
-- Error reading structure for table student-manager-database.presence_etudiant_view: #1142 - SHOW VIEW command denied to user 'usr'@'localhost' for table 'presence_etudiant_view'

-- --------------------------------------------------------

--
-- Structure for view `professeur_view`
--
DROP TABLE IF EXISTS `professeur_view`;
-- Error reading structure for table student-manager-database.professeur_view: #1142 - SHOW VIEW command denied to user 'usr'@'localhost' for table 'professeur_view'

-- --------------------------------------------------------

--
-- Structure for view `seance_view`
--
DROP TABLE IF EXISTS `seance_view`;
-- Error reading structure for table student-manager-database.seance_view: #1142 - SHOW VIEW command denied to user 'usr'@'localhost' for table 'seance_view'

-- --------------------------------------------------------

--
-- Structure for view `ue_attribut_view`
--
DROP TABLE IF EXISTS `ue_attribut_view`;
-- Error reading structure for table student-manager-database.ue_attribut_view: #1142 - SHOW VIEW command denied to user 'usr'@'localhost' for table 'ue_attribut_view'

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cg_etudiant`
--
ALTER TABLE `cg_etudiant`
  ADD CONSTRAINT `au_id_fk_in_cge` FOREIGN KEY (`au_id`) REFERENCES `annee_universitaire` (`au_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `classe_id_fk_in_cge` FOREIGN KEY (`classe_id`) REFERENCES `classe` (`classe_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `etudiant_id_fk_in_cge` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`etudiant_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `groupe_id_fk_in_cge` FOREIGN KEY (`groupe_id`) REFERENCES `groupe` (`groupe_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `classe`
--
ALTER TABLE `classe`
  ADD CONSTRAINT `niveau_id_fk_in_classe` FOREIGN KEY (`niveau_id`) REFERENCES `niveau` (`niveau_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `parcours_id_fk_in_classe` FOREIGN KEY (`parcours_id`) REFERENCES `parcours` (`parcours_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `classe_groupe`
--
ALTER TABLE `classe_groupe`
  ADD CONSTRAINT `classe_id_fk_in_cg` FOREIGN KEY (`classe_id`) REFERENCES `classe` (`classe_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `groupe_id_fk_in_cg` FOREIGN KEY (`groupe_id`) REFERENCES `groupe` (`groupe_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `element_constitutif`
--
ALTER TABLE `element_constitutif`
  ADD CONSTRAINT `professeur_id_fk_in_ec` FOREIGN KEY (`professeur_id`) REFERENCES `professeur` (`professeur_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ue_id_fk_in_ec` FOREIGN KEY (`ue_id`) REFERENCES `unite_enseignement` (`ue_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `mention`
--
ALTER TABLE `mention`
  ADD CONSTRAINT `professeur_id_fk_in_mention` FOREIGN KEY (`professeur_id`) REFERENCES `professeur` (`professeur_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `note_etudiant`
--
ALTER TABLE `note_etudiant`
  ADD CONSTRAINT `etudiant_id_fk_in_ne` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`etudiant_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `seance_id_fk_in_ne` FOREIGN KEY (`seance_id`) REFERENCES `seance` (`seance_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `parcours`
--
ALTER TABLE `parcours`
  ADD CONSTRAINT `mention_id_fk_in_parcours` FOREIGN KEY (`mention_id`) REFERENCES `mention` (`mention_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `professeur_id_fk_in_parcours` FOREIGN KEY (`professeur_id`) REFERENCES `professeur` (`professeur_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `presence_etudiant`
--
ALTER TABLE `presence_etudiant`
  ADD CONSTRAINT `etudiant_id_fk_in_pe` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`etudiant_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `seance_id_fk_in_pe` FOREIGN KEY (`seance_id`) REFERENCES `seance` (`seance_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `professeur`
--
ALTER TABLE `professeur`
  ADD CONSTRAINT `grade_id_fk_in_professeur` FOREIGN KEY (`grade_id`) REFERENCES `grade` (`grade_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `seance`
--
ALTER TABLE `seance`
  ADD CONSTRAINT `classe_id_fk_in_seance` FOREIGN KEY (`classe_id`) REFERENCES `classe_groupe` (`classe_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ec_id_fk_in_seance` FOREIGN KEY (`ec_id`) REFERENCES `element_constitutif` (`ec_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `groupe_id_fk_in_seance` FOREIGN KEY (`groupe_id`) REFERENCES `classe_groupe` (`groupe_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `salle_id_fk_in_seance` FOREIGN KEY (`salle_id`) REFERENCES `salle` (`salle_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ts_id_fk_in_seance` FOREIGN KEY (`ts_id`) REFERENCES `type_seance` (`ts_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ue_attribut`
--
ALTER TABLE `ue_attribut`
  ADD CONSTRAINT `ue_id_fk_in_uea` FOREIGN KEY (`ue_id`) REFERENCES `unite_enseignement` (`ue_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
