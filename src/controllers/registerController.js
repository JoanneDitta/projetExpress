const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.User;

const registerUser = async (req, res) => {
  try {
    console.log("Données reçues :", req.body); // 🔍 Vérifie ce qui est reçu

    if (!req.body) {
      return res.status(400).json({ status: "KO", message: "Aucune donnée reçue" });
    }

    const { nom, prenom, pseudo, email, password, role } = req.body;

    if (!nom || !prenom || !pseudo || !email || !password) {
      return res.status(400).json({ status: "KO", message: "Tous les champs sont requis" });
    }

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ status: "KO", message: "Email déjà utilisé" });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = await User.create({ nom, prenom, pseudo, email, password: hashedPassword, role });

    res.status(201).json({ status: "OK", message: "Utilisateur créé", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "KO", message: "Erreur serveur", error: error.message });
  }
};

module.exports = { registerUser };
