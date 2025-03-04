const express = require("express");
const bcrypt = require("bcrypt");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();
app.use(express.json());

// Connexion à la base de données
const sequelize = new Sequelize("projetexpress", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

// Import du modèle
const User = require("./user")(sequelize, DataTypes);

// Route de création d'utilisateur avec hash du mot de passe
app.post("/users", async (req, res) => {
  try {
    const { pseudo, nom, prenom, email, role, password } = req.body;

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const user = await User.create({ pseudo, nom, prenom, email, role, password: hashedPassword });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Exportation de la connexion
const db = { sequelize, User };
db.sequelize.sync();

module.exports = db;










// const express = require("express");

// const app = express();
// app.use(express.json());


// app.post("/users", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// const { Sequelize, DataTypes } = require("sequelize");

// // Connexion à la base de données (remplace les valeurs par les tiennes)
// const sequelize = new Sequelize("projetexpress", "root", "", {
//   host: "localhost",
//   dialect: "mysql", // ou 'postgres', 'sqlite', 'mssql'
// });

// // Import des modèles
// const User = require("./user")(sequelize, DataTypes);

// // Regroupe les modèles dans un objet db
// const db = { sequelize, User };

// // Synchronisation de la base de données
// db.sequelize.sync()
//   .then(() => console.log("Base de données synchronisée !"))
//   .catch((err) => console.error("Erreur de synchronisation :", err));

// db.sequelize
//   .authenticate()
//   .then(() => console.log("✅ Connexion réussie à MySQL"))
//   .catch((err) => console.error("❌ Erreur connexion MySQL :", err));

// // Exportation
// module.exports = db;
