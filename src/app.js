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
const userRoutes = require("./routes/isBannedRoutes");
app.use("/users", userRoutes);
//liste User
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);
//Up User Admin
const userRoutes = require("./routes/UpUserRoutes");
app.use("/user", userRoutes);
//Down User Admin
const userRoutes = require("./routes/DownUserRoutes");
app.use("/user", userRoutes);




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
