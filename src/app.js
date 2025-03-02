const express = require('express');
const passport = require('passport');
// require('./src/models/auth');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const heyRoutes = require('./routes/heyRoutes');
app.use(heyRoutes);
const authRoutes = require('./routes/authRoutes');
app.use(authRoutes);

const registerRoutes = require('./src/routes/registerRoutes');
app.use('/register', registerRoutes);


app.use(passport.initialize());

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
