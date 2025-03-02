const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('login', { session: false }, (err, data, info) => {
        if (err || !data) {
            return res.status(400).json({ message: info ? info.message : 'Login failed' });
        }
        res.json({ token: data.token });
    })(req, res, next);
});

module.exports = router;
