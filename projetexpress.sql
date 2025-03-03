-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 03 mars 2025 à 16:12
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projetexpress`
--

-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20250302165006-create-users.js'),
('20250302171358-add-isBanned-to-users.js'),
('20250302171549-add-role-to-users.js');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isBanned` tinyint(1) NOT NULL DEFAULT 0,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `email`, `pseudo`, `password`, `createdAt`, `updatedAt`, `isBanned`, `role`) VALUES
(1, 'nomTest', 'prenomTest', 'user@test.com', 'userTest', 'vfcgzrffegvfg', '2025-03-02 15:12:29', '2025-03-02 15:12:29', 0, NULL),
(2, 'Doe', 'John', 'john.doe@example.com', 'john123', '$2b$10$1E79NmjsNSZo/tZNTBgyTezIqj97V78fgNzSN8yF73Vdsdop10igu', '2025-03-02 14:31:37', '2025-03-02 14:31:37', 0, NULL),
(4, 'hfhf', 'ff', 'mf.lf@example.com', 'ffffffff', '$2b$10$6HW7AWBgzz4Ed.vv5kBio.f45o0Yyx7p6W8OJr/Zg0reTuIX2w0X6', '2025-03-02 16:58:01', '2025-03-02 16:58:01', 0, 'admin'),
(5, 'LARUE', 'Michel', 'm.l@example.com', 'michou', '$2b$10$vF4BSu4Aoahcf.GBicsLZ.Cji1j84jI.I5KgGVFO9niGlPEG8Qn9m', '2025-03-03 14:51:54', '2025-03-03 14:51:54', 0, 'admin');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `pseudo` (`pseudo`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
