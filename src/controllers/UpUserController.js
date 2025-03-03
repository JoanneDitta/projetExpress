const { User } = require("../models");

// Fonction pour promouvoir un utilisateur en admin
const upgradeToAdmin = async (req, res) => {
  try {
    const { userId } = req.body; // ID de l'utilisateur à promouvoir

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ status: "KO", message: "Utilisateur non trouvé" });
    }

    if (user.role === "admin") {
      return res.status(400).json({ status: "KO", message: "L'utilisateur est déjà admin." });
    }

    user.role = "admin"; // Met à jour le rôle
    await user.save();

    res.json({ status: "OK", message: `L'utilisateur ${user.email} est maintenant admin.` });
  } catch (error) {
    console.error("Erreur dans upgradeToAdmin :", error);
    res.status(500).json({ status: "KO", message: "Erreur serveur" });
  }
};

module.exports = { upgradeToAdmin };
