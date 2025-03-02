// ./src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Route signup
router.post(
    '/signup',
    passport.authenticate('signup', { session: false }),
    async (req, res, next) => {
        res.json({
            message: 'Signup successful',
            user: req.user
        });
    }
);

// Route login (génération du token après authentification)
router.post(
    '/login',
    passport.authenticate('login', { session: false }),
    async (req, res, next) => {
        try {
            if (!req.user || !req.user.token) {
                return res.status(400).json({ message: 'Login failed' });
            }

            // Renvoie le token généré
            return res.json({ token: req.user.token });
        } catch (error) {
            return next(error);
        }
    }
);

module.exports = router;