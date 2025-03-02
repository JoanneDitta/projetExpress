const { User } = require("../models");

// Fonction pour rétrograder un admin en utilisateur
const downgradeToUser = async (req, res) => {
  try {
    const { userId } = req.body; // ID de l'utilisateur à rétrograder

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ status: "KO", message: "Utilisateur non trouvé" });
    }

    if (user.role !== "admin") {
      return res.status(400).json({ status: "KO", message: "Cet utilisateur n'est pas un admin." });
    }

    user.role = "user"; // Met à jour le rôle
    await user.save();

    res.json({ status: "OK", message: `L'utilisateur ${user.email} a été rétrogradé en utilisateur.` });
  } catch (error) {
    console.error("Erreur dans downgradeToUser :", error);
    res.status(500).json({ status: "KO", message: "Erreur serveur" });
  }
};

module.exports = { downgradeToUser };
