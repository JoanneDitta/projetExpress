const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.User;

const registerUser = async (req, res) => {
  try {
    const { pseudo, email, password } = req.body;

    // Vérifier l'existance du User
    const existingUser = await User.findOne({
      where: {
        [db.Sequelize.Op.or]: [{ pseudo }, { email }],
      },
    });

    if (existingUser) {
      return res.status(400).json({ status: "KO", message: "Pseudo ou email déjà utilisé" });
    }

    // Hacher le mdp
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création nouveau User
    await User.create({ pseudo, email, password: hashedPassword });

    res.status(201).json({ status: "OK", message: "Utilisateur créé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "KO", message: "Erreur serveur" });
  }
};

module.exports = { registerUser };
