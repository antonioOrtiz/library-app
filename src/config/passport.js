var passport = require('passport');

module.exports = function(app) {
    app.use(passport.inititalize()); //*****
    app.use(passport.session()); //*****    

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(userId, done) {
        done(null, user);
    });
};
