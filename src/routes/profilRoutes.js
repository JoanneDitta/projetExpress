const express = require("express");
const authenticateToken = require("../middlewares/authMiddleware");
const { getUserProfile } = require("../controllers/profilController");

const router = express.Router();

// Route GET pour récupérer le profil utilisateur (nécessite un token)
router.get("/:id", authenticateToken, getUserProfile);

module.exports = router;