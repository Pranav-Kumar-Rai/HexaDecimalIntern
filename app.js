var request = require("request")
var http = require('http');
var url = "https://jsonplaceholder.typicode.com/users"
var hostname = '127.0.0.1';
var port = 8080;
var app = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.end(JSON.stringify(body));
        }
    });
});

app.listen(port,hostname, function(err){
    if(err)
    console.log('Error generated  ' +  err);
    else console.log('Server Started');
});