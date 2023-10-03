const passport = require('passport');
const { Strategy: localStrategy } = require('passport-local');
const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = () => {
    passport.use(new localStrategy({
        usernameField:'ids',
        passwordField:'password',
        passReqToCallback:false,
    }, async (ids, password, done) => {
        try {
            const exUser = await User.findOne({
                where: { ids }
            });
            if(exUser) {
                const result = await bcrypt.compare(password, exUser.password);
                if(result) {
                    done(null, exUser);
                } else {
                    done(null, { message: '잘못된 정보입니다' })
                }
            } else {
                done(null, { message: '잘못된 정보입니다' })
            }
        } catch (err) {
            console.error(err);
            done(err);
        }
    }))
}