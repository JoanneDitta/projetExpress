const express = require("express");
const { registerUser } = require("../controllers/RegisterController"); // Import du contrôleur

const router = express.Router();

// Route d'inscription
router.post("/", registerUser);

module.exports = router;
