const { User } = require("../models");

// Fonction pour bannir un utilisateur
const banUser = async (req, res) => {
  try {
    const { userId } = req.body; // Récupération de l'ID de l'utilisateur à bannir

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ status: "KO", message: "Utilisateur non trouvé" });
    }

    user.isBanned = true; // Mise à jour du statut
    await user.save();

    res.json({ status: "OK", message: `L'utilisateur ${user.email} a été banni.` });
  } catch (error) {
    console.error("❌ Erreur lors du bannissement :", error);
    res.status(500).json({ status: "KO", message: "Erreur serveur" });
  }
};

module.exports = { banUser };
