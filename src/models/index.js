const express = require("express");

const app = express();
app.use(express.json());


app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const { Sequelize, DataTypes } = require("sequelize");

// Connexion à la base de données (remplace les valeurs par les tiennes)
const sequelize = new Sequelize("projetexpress", "root", "", {
  host: "localhost",
  dialect: "mysql", // ou 'postgres', 'sqlite', 'mssql'
});

// Import des modèles
const User = require("./user")(sequelize, DataTypes);

// Regroupe les modèles dans un objet db
const db = { sequelize, User };

// Synchronisation de la base de données
db.sequelize.sync()
  .then(() => console.log("Base de données synchronisée !"))
  .catch((err) => console.error("Erreur de synchronisation :", err));

// Exportation
module.exports = db;
