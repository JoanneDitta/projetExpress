const express = require('express');
const passport = require('passport');
const bcrypt = require("bcrypt");
// require('./src/models/auth');


const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//Hey Routes
const heyRoutes = require('./routes/heyRoutes');
app.use(heyRoutes);
// Auth Routes
const authRoutes = require('./routes/authRoutes');
app.use(authRoutes);
// Regiter Routes
const registerRoutes = require('./routes/registerRoutes');
app.use('/register', registerRoutes);
// Profil Routes
const profileRoutes = require('./routes/profilRoutes');
app.use('/profile', profileRoutes);


app.use(passport.initialize());

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
