const express = require("express");
const deleteUserController = require("../controllers/deleteUserController");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/adminMiddleware");

const router = express.Router();

// Route pour supprimer un utilisateur (accessible uniquement aux admins)
router.delete("/:id", authMiddleware, isAdmin, deleteUserController);

module.exports = router;
