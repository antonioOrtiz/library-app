var express = require('express'), 
    app = express(),
    port = 5000;

    app.listen(port, function(err){
        console.log('running server on port ' + port);
    });

