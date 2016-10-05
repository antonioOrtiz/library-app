var express = require('express'),
    bookRouter = express.Router(),
    mongodb = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectID,


    router = function routerFunc(nav) {
        // body... 
        var bookController = require('../controllers/bookController')(null, nav);
        bookRouter.use(bookController.middleware);
 
        bookRouter.route('/')
            .get(bookController.getIndex);

        bookRouter.route('/:id')
            .get(bookController.getById);

        return bookRouter;
    };
module.exports = router;
