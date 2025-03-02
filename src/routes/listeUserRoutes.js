const express = require("express");
const authenticateToken = require("../middlewares/authMiddleware");
const { listUsers } = require("../controllers/listeUserController");

const router = express.Router();

// Route GET pour lister tous les utilisateurs (nécessite un token)
router.get("/list", authenticateToken, listUsers);

module.exports = router;
