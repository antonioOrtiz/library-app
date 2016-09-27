var express = require('express'),
    bookRouter = express.Router(),
    mongodb = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectID,


    router = function routerFunc(nav) {
        // body... 

       bookRouter.route('/')
        .get(function (req, res) {
            var url =
                'mongodb://localhost:27017/library-app';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');

                collection.find({}).toArray(
                    function (err, results) {
                        res.render('bookListView', {
                            title: 'Books',
                            nav: nav,
                            books: results
                        });
                    }
                );
            });

        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = new ObjectId(req.params.id);
            var url =
                'mongodb://localhost:27017/library-app';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');

                collection.findOne({_id: id},
                    function (err, results) {
                        res.render('bookView', {
                            title: 'Books',
                            nav: nav,
                            book: results
                        });

                    }
                );

            });

        });

    return bookRouter;
};
module.exports = router;