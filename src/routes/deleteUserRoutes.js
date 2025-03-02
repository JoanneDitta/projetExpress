const express = require("express");
const deleteUserController = require("../controllers/deleteUserController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Route pour supprimer un utilisateur (accessible uniquement aux admins)
router.delete("/:id", authMiddleware, deleteUserController);

module.exports = router;
