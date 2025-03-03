const passport = require('passport');

const isAdmin = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    console.log("=== DEBUG ===");
    console.log("Erreur : ", err);
    console.log("Utilisateur : ", user);
    console.log("Info : ", info);
    console.log("=== END DEBUG ===");

    if (err) {
      return res.status(500).json({ message: "Erreur interne", error: err.message || err });
    }

    if (!user) {
      return res.status(403).json({ message: "Unauthorized", info });
    }

    // Vérification du rôle
    if (user.role !== 'admin') {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    req.user = user; // Attacher l'utilisateur au request
    next(); // Passer au middleware suivant
  })(req, res, next);
};

module.exports = isAdmin;
