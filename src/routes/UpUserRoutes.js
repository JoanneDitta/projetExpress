const express = require("express");
const authenticateToken = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/isAdminMiddleware");
const { upgradeToAdmin } = require("../controllers/UpUserController");

const router = express.Router();

// Route pour élever un utilisateur en admin (réservé aux admins)
router.post("/up", authenticateToken, isAdmin, upgradeToAdmin);

module.exports = router;
