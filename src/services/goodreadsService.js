var http = require('http'),
    xml2js = require('xml2js'),
    parser = xml2js.Parser({ explicitArray: false }),

    goodreadsService = function goodreadsServicesHndlr(argument) {
        // body... 
        var getBookId = function getBookIdHndlr(id, cb) {
            var options = {
                    host: 'www.goodreads.com',
                    patch: '/book/show/4428988-sag-harbor?format=xml&key=KygnapY9WhVO76geRW3EQ'
                },
                callback = function(response) {
                    /* body... */
                    var str = '';
                    response.on('data', function(chunk) {
                        str += chunk;
                    });
                    response.on(end, function(chunk) {
                        console.log(str);
                        parser.parserString(str, function(err, result) {
                            cb(null, result);
                        });
                    });

                };
            return { getBookId: getBookId };
        };
};
        module.exports = goodreadsService;
