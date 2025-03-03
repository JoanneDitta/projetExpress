const bcrypt = require('bcrypt');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Assure-toi d'importer ton modèle User

// Clé secrète partagée
const JWT_SECRET = 'TOP_SECRET'; // Utilise une variable d'environnement pour plus de sécurité en production

// Utilisation de la stratégie login
passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                // Recherche de l'utilisateur dans la base de données
                const user = await User.findOne({ where: { email: email } });

                if (!user) {
                    return done(null, false, { message: 'User not found' });
                }

                // Vérification du mot de passe avec bcrypt
                const passwordMatch = await bcrypt.compare(password, user.password);
                if (!passwordMatch) {
                    return done(null, false, { message: 'Incorrect password' });
                }

                // Si l'utilisateur est authentifié, on génère un token
                const payload = { _id: user.id, email: user.email, role: user.role };
                const token = jwt.sign({ user: payload }, JWT_SECRET, { expiresIn: '1h' });

                return done(null, { user, token });
            } catch (error) {
                return done(error);
            }
        }
    )
);

// Utilisation de la stratégie JWT pour les routes sécurisées
passport.use(
    new JWTStrategy(
        {
            secretOrKey: JWT_SECRET, // Assure-toi d'utiliser le même secret ici pour vérifier le token
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        },
        async (token, done) => {
            try {
                console.log("=== DEBUG JWT ===");
                console.log("Token décodé : ", token);
                console.log("=== END DEBUG ===");

                // On peut vérifier si le token contient un user valide
                if (!token || !token.user) {
                    return done(null, false, { message: 'Invalid token' });
                }

                // Retourne l'utilisateur du token
                return done(null, token.user);
            } catch (error) {
                console.error("Erreur JWT : ", error);
                return done(error);
            }
        }
    )
);

module.exports = passport;
