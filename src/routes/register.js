const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../models");

const router = express.Router();
const User = db.User;

// Route d'inscription
router.post("/register", async (req, res) => {
  try {
    const { pseudo, email, password } = req.body;

    // Vérifier si l'utilisateur existe déjà (pseudo ou email)
    const existingUser = await User.findOne({
      where: {
        [db.Sequelize.Op.or]: [{ pseudo }, { email }],
      },
    });

    if (existingUser) {
      return res.status(400).json({ status: "KO", message: "Pseudo ou email déjà utilisé" });
    }

    // Hacher le mot de passe avant de l'enregistrer
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    await User.create({ pseudo, email, password: hashedPassword });

    res.status(201).json({ status: "OK", message: "Utilisateur créé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "KO", message: "Erreur serveur" });
  }
});

module.exports = router;