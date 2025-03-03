const express = require("express");
const authenticateToken = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/isAdminMiddleware");
const { upgradeToAdmin, downgradeToUser } = require("../controllers/DownUserController");

const router = express.Router();


// Route pour rétrograder un admin en utilisateur (réservé aux admins)
router.post("/down", authenticateToken, isAdmin, downgradeToUser);

module.exports = router;
