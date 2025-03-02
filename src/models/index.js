const express = require("express");
const db = require("./models"); // Import de la connexion Sequelize et des modèles

const app = express();
app.use(express.json());

const User = db.User; // s'assure que le modèle User existe

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

app.listen(3000, async () => {
  try {
    await db.sequelize.authenticate(); // Vérifie la connexion à la BDD
    console.log("Connexion à la base de données réussie !");
  } catch (error) {
    console.error("Impossible de se connecter à la base de données :", error);
  }
  console.log("Serveur démarré sur http://localhost:3000");
});

