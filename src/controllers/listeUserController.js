const { User } = require("../models");

// Liste tous les utilisateurs
const listUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "nom", "prenom", "email", "pseudo", "isBanned", "role"], // Sélectionne les champs nécessaires
    });

    res.json({ status: "OK", users });
  } catch (error) {
    console.error("Erreur dans listUsers :", error);
    res.status(500).json({ status: "KO", message: "Erreur serveur" });
  }
};

module.exports = { listUsers };
