const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ status: "KO", message: "Accès refusé. Aucun token fourni." });
  }

  try {
    const verified = jwt.verify(token.replace("Bearer ", ""), "SECRET_KEY"); // Enlève "Bearer " si présent
    req.user = verified; // On stocke les infos du user dans req.user
    next();
  } catch (err) {
    res.status(403).json({ status: "KO", message: "Token invalide." });
  }
};

module.exports = authenticateToken;
