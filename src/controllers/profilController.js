const db = require("../models");
const User = db.User;

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ["nom", "prenom", "email", "pseudo"], // Sélectionne uniquement ces champs
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

