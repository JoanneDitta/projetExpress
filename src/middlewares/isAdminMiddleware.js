const isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ status: "KO", message: "Accès refusé. Admin requis." });
    }
    next(); // Si l'utilisateur est admin, on continue
  };
  
  module.exports = isAdmin;
  