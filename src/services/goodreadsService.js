var http = require('http'),
    xml2js = require('xml2js'),
    parser = xml2js.Parser({ explicitArray: false });

var goodreadsService = function goodreadsServicesHndlr() {
    // body... 
    var getBookById = function getBookByIdHndlr(id, cb) {
        var options = {
                host: 'www.goodreads.com',
                path: '/book/show/' + id + '?format=xml&key=KygnapY9WhVO76geRW3EQ'
            },
            callback = function(response) {
                /* body... */
                var str = '';
                response.on('data', function(chunk) {
                    str += chunk;
                });
               response.on('end', function() {
                console.log(str);
                parser.parseString(str,
                    function(err, result) {
                        cb(null,
                           result.GoodreadsResponse.book);
                    });
            });

            };
        http.request(options, callback).end();

    };

    return {
        getBookById: getBookById
    };
};

module.exports = goodreadsService;
