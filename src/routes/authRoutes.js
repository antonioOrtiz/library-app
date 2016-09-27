var express = require('express'),
    authRouter = express.Router(),
    mongodb = require('mongodb').MongoClient,

    router = function() {
        authRouter.route('/signUp')
            .post(function(req, res) {
                console.log(req.body);
            });

        return authRouter;
    };

module.exports = router;
