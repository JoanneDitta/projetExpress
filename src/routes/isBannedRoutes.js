const express = require("express");
const authenticateToken = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/isAdminMiddleware");
const { banUser } = require("../controllers/isBannedController");

const router = express.Router();

// Route pour bannir un utilisateur (réservé aux admins)
router.post("/ban", authenticateToken, isAdmin, banUser);

module.exports = router;
