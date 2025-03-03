const express = require('express');
const passport = require('passport');
const bcrypt = require("bcrypt");
require('./models/auth'); // Importer les stratégies de passport


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
//Ban user
const isBannedRoutes = require("./routes/isBannedRoutes");
app.use("/users", isBannedRoutes);
//liste User
const listeUserRoutes = require("./routes/listeUserRoutes");
app.use("/users", listeUserRoutes);
//Up User Admin
const UpUserRoutes = require("./routes/UpUserRoutes");
app.use("/user", UpUserRoutes);
//Down User Admin
const DownUserRoutes = require("./routes/DownUserRoutes");
app.use("/user", DownUserRoutes);


// Delete User Routes
const deleteRoutes = require('./routes/deleteUserRoutes');
app.use('/users/rm', deleteRoutes);


app.use(passport.initialize());

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
