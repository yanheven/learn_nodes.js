var http = require('http');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'test/plain'});
    response.end('Hello World!\n');
}).listen(8888);

console.log('Server running at http://locahost:8888/');
