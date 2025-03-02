// ./auth/Auth.js
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');

// Utilisation de la stratégie signup
passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            try {
                const user = {
                    email: 'test',
                    password: 'test'
                };
                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);

// Utilisation de la stratégie login
passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            try {
                const user = {
                    email: 'test',
                    password: 'test'
                };

                if (!user || user.password !== password) {
                    return done(null, false, { message: 'User not found or incorrect password' });
                }

                // Si l'utilisateur est authentifié, on génère un token
                const payload = { _id: 'userId', email: user.email };
                const token = jwt.sign({ user: payload }, 'TOP_SECRET', { expiresIn: '1h' });

                return done(null, { user, token }); // Passer l'objet user et le token
            } catch (error) {
                done(error);
            }
        }
    )
);

// Utilisation de la stratégie JWT pour les routes sécurisées
passport.use(
    new JWTStrategy(
        {
            secretOrKey: 'TOP_SECRET',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
);
