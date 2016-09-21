var express = require('express'), //*****
    app = express(), //*****
    port = process.env.PORT || 5000, //*****
    books = [
        {
            title: 'Sag Harbor',
            genre: 'fiction',
            author: 'Colson Whitehead',
            read: false
        },
        {
            title: '',
            genre: '',
            author: '',
            read: false
        },
        {
            title: '',
            genre: '',
            author: '',
            read: false
        }
        {
            title: '',
            genre: '',
            author: '',
            read: false
        }
    ],

    bookRouter = express.Router(); //*****

app.use(express.static('public')); //*****

app.set('views', './src/views'); //*****

app.set('view engine', 'ejs'); //*****

bookRouter.route('/')
    .get(function(req, res) {
        res.render('books', {
            title: 'Books',
            nav: [{
                Link: '/Books',
                Text: 'Books'
            }, {
                Link: '/Authors',
                Text: 'Authors'
            }]
        });
    });

bookRouter.route('/')
    .get(function(req, res) {
        res.send('Hello Books');
    });

app.use('/Books', bookRouter);

bookRouter.route('/single')
    .get(function(req, res) {
        res.send('Hello Single Book');
    });


app.get('/', function(req, res) { //*****
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});

app.get('/books', function(req, res) { //*****
    res.send('Hello books');
});

app.listen(port, function(err) { //*****
    console.log('running server on port ' + port);
});
