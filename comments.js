// Create web server
// Create a web server that listens on port 3000 and returns the comments from comments.json as JSON.
// When a GET request is made to the root of the server, the server should return the comments as JSON.
// The server should respond to GET requests for /comments with a JSON representation of comments.
// Use the correct content-type in the response.
// You can read the comments from the file using require. You should not use a variable to store the comments. You should use require to load the comments directly into memory.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'application/json'
  });
  var readStream = fs.createReadStream('comments.json');
  readStream.pipe(response);
});

server.listen(3000);
console.log('Server listening on port 3000');