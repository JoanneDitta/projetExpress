const express = require("express");
const { registerUser } = require("../controllers/RegisterController");

const router = express.Router();

router.post("/", (req, res, next) => {
  console.log("✅ Requête reçue sur /register avec :", req.body);
  next(); // Passe à registerUser
}, registerUser);

module.exports = router;

