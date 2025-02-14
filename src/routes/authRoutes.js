const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

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

router.post(
    '/login',
    passport.authenticate('login', { session: false }),
    async (req, res, next) => {
        try {
            if (!req.user || !req.user.token) {
                return res.status(400).json({ message: 'Bad credential / incorrect user' });
            }

            return res.json({ token: req.user.token });
        } catch (error) {
            return next(error);
        }
    }
);

module.exports = router;
