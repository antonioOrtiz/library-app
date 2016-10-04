var mongodb = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectID;


var bookController = function bookControllerHandler(bookService, nav) {
    // body... 
    var getIndex = function(req, res) {
            var url =
                'mongodb://localhost:27017/library-app';

            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');

                collection.find({}).toArray(
                    function(err, results) {
                        res.render('bookListView', {
                            title: 'Books',
                            nav: nav,
                            books: results
                        });
                    }
                );
            });

        },
        getById = function(req, res) {
            var id = new ObjectId(req.params.id);
            var url =
                'mongodb://localhost:27017/library-app';

            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');

                collection.findOne({ _id: id },
                    function(err, results) {
                        res.render('bookView', {
                            title: 'Books',
                            nav: nav,
                            book: results
                        });

                    }
                );

            });

        };

    return {
        getIndex: getIndex,
        getById: getById
    };

};

module.exports = bookController;
