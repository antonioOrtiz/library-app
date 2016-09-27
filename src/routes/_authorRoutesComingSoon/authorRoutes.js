var express = require('express'),
    authorRouter = express.Router(),

    router = function routerFunc(nav) {
        // body... 
        var authors = [{
            author: 'Colson Whitehead',
        }, {
            author: 'Robert A. Caro',
        }, {
            author: 'Chip Kidd',
        }, {
            author: 'Paul Krugman',
        }];

        authorRouter.route('/')
            .get(function(req, res) {
                res.render('bookListView', {
                    title: 'Author',
                    nav: nav,
                    author: authors
                });
            });

        authorRouter.route('/:id')
            .get(function(req, res) {
                var id = req.params.id;
                res.render('authorView', {
                    title: 'Author',
                    nav: [{
                        Link: '/Books',
                        Text: 'Book'
                    }, {
                        Link: '/Authors',
                        Text: 'Author'
                    }],
                    author: authors[id]
                });
            });

        return authorRouter;

    };

module.exports = router;
