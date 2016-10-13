var express = require('express'),
    adminRouter = express.Router(),
    mongodb = require('mongodb').MongoClient,
    books = [{
        title: 'Sag Harbor',
        genre: 'Fiction',
        author: 'Colson Whitehead',
        bookId: 4428988,
        read: false
    }, {
        title: 'The Power Broker',
        genre: 'Non-fiction',
        author: 'Robert A. Caro',
        bookId: 1111,
        read: false
    }, {
        title: 'The Cheese Monkeys',
        genre: 'fiction',
        author: 'Chip Kidd',
        bookId: 28756,
        read: false
    }, {
        title: 'Conscience of a liberal',
        genre: 'fiction',
        author: 'Paul Krugman',
        bookId: 1169429,
        read: false
    }],
    router = function(nav) {

        adminRouter.route('/addBooks')
            .get(function(req, res) {
                var url = 'mongodb://localhost:27017/library-app';
                
                mongodb.connect(url, function(err, db) {
                    var collection = db.collection('books');
                        collection.insertMany(books, 
                            function(err, results) {
                                res.send(results);          
                                db.close();           
                            });
                });
                // res.send('inserting books');
            });

        return adminRouter;
    };

module.exports = router;