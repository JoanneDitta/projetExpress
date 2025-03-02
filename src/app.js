const express = require('express');
const passport = require('passport');
require('./src/models/auth');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./src/routes/authRoutes');
app.use('/', routes);
const heyRoutes = require('./src/routes/heyRoutes');
app.use(heyRoutes);
// const registerRoutes = require('./src/routes/registerRoutes');
// app.use(authRoutes);
const profileRoutes = require('./src/routes/profileRoutes');
app.use('/profile', profileRoutes);

app.use(passport.initialize());

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});