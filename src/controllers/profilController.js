const db = require("../models");
const User = db.User;

const getUserProfile = async (req, res) => {
  try {
    const userId = req.params.id; // Récupère l'ID dans l'URL

    // Vérifie si l'utilisateur existe
    const user = await User.findByPk(userId, {
      attributes: ["nom", "prenom", "role", "email", "pseudo"], // Sélectionne uniquement ces champs
    });

    if (!user) {
      return res.status(404).json({ status: "KO", message: "Utilisateur non trouvé" });
    }

    res.status(200).json({ status: "OK", user });
  } catch (error) {
    console.error("❌ Erreur dans getUserProfile :", error);
    res.status(500).json({ status: "KO", message: "Erreur serveur" });
  }
};

module.exports = { getUserProfile };

