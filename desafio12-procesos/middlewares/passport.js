const passport = require('passport');
const bCrypt = require('bcrypt');
const mongoose = require('mongoose');
const config = require('../config');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/usuario');

function createHash(password) {
    return bCrypt.hashSync(
        password,
        bCrypt.genSaltSync(10),
        null);
}

function isValidPassword(user, password) {
    return bCrypt.compareSync(password, user.password);
}

const initPassport = () => {

    try {
        mongoose.connect(config.mongoRemote.cnxStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'ecommerce'
        })
    } catch (err) {
        console.log(err)
    }

    passport.use('login', new LocalStrategy(
        (username, password, done) => {
            User.findOne({ username }, (err, user) => {
                if (err)
                    return done(err);
                if (!user) {
                    console.log('Usuario no encontrado con username ' + username);
                    return done(null, false);
                }
                if (!isValidPassword(user, password)) {
                    console.log('password invalida');
                    return done(null, false);
                }
                return done(null, user);
            });
        })
    );


    passport.use('signup', new LocalStrategy({
                passReqToCallback: true
            },
            (req, username, password, done) => {
                User.findOne({'username': username}, function (err, user) {

                    if (err) {
                        console.log('Error en user: ' + err);
                        return done(err);
                    }

                    if (user) {
                        console.log('Ususario ya exite');
                        return done(null, false)
                    }

                    const newUser = {
                        username: username,
                        password: createHash(password),
                    }

                    User.create(newUser, (err, userWithId) => {
                        if (err) {
                            console.log('Error de grabacion de usuario: ' + err);
                            return done(err);
                        }
                        console.log(user)
                        console.log('Registracion exitosa');
                        return done(null, userWithId);
                    });
                });
            })
    )


    passport.serializeUser((user, done) => {
        done(null, user._id);
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, done);
    })
}

module.exports = {initPassport}