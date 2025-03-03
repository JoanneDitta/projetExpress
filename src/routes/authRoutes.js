// ./src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Route login (authentification + token)
router.post(
    '/login',
    (req, res, next) => {
        passport.authenticate('login', { session: false }, (err, userData, info) => {
            if (err) return next(err);
            if (!userData) return res.status(400).json({ message: info.message });

            // Retourne le token et les infos utilisateur
            return res.json({
                message: 'Connexion réussie',
                token: userData.token,
                user: {
                    id: userData.user.id,
                    email: userData.user.email,
                    role: userData.user.role
                }
            });
        })(req, res, next);
    }
);

module.exports = router;
