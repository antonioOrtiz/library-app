var express = require('express'),
    authRouter = express.Router(),
    mongodb = require('mongodb').MongoClient,
    passport = require('passport'),

    router = function() {
        authRouter.route('/signUp')
            .post(function(req, res) {
                console.log(req.body);
                var url = 'mongodb://localhost:27017/library-app';

                mongodb.connect(url, function(err, db) {
                    var collection = db.collection('users'),
                        user = {
                            username: req.body.userName,
                            password: req.body.password
                        };
                    collection.insert(user,
                        function(err, results) {
                            req.login(results.ops[0], function() {
                                res.redirect('/auth/profile');
                            });
                        });
                });
            });

        authRouter.route('/signIn')
            .post(passport.authenticate('local', {
                failureRedirect: '/'
            }), function(req, res) {
                /* body... */
                res.redirect('/auth/profile');
            });
        authRouter.route('/profile')
            .all(function(req, res, next) {
                if (!req.user) {
                    res.redirect('/');
                }
                next();
            })
            .get(function(req, res) {
                res.json(req.user);
            });
        return authRouter;
    };

module.exports = router;
