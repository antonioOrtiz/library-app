var express = require('express'), //*****
    bodyParser = require('body-parser'),
    app = express(), //*****
    port = process.env.PORT || 5000, //*****
    nav = [{
        Link: '/Books',
        Text: 'Book'
    }, {
        Link: '/Authors',
        Text: 'Author'
    }],

    bookRouter = require('./src/routes/bookRoutes')(nav),
    adminRouter = require('./src/routes/adminRoutes')(nav),
    authRouter = require('./src/routes/authRoutes')(nav);


app.use(express.static('public')); //*****
app.use(bodyParser.json()); //*****
app.use(bodyParser.urlencoded()); //*****


app.set('views', './src/views'); //*****

app.set('view engine', 'ejs');


app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);


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
