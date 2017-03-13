var http = require('http');
var server = http.createServer(handler);
var fs = require('fs');
var path = require('path');

var message = 'I am so happy to be part of the Node Girls workshop!';

function handler (request, response) {
  var endpoint = request.url;
  console.log(endpoint);
  if (endpoint.indexOf("/") !== -1) {
    fs.readFile(path.join(__dirname,"public","index.html"), function(err, file) {
      if (err) throw err;
      response.writeHead(200, "Content-Type: text/html");
      response.end(file);
    });
  }

  var method = request.method;
  console.log(method);
  // response.writeHead(200, "Content-Type: text/html");
  // response.write(message);
  // response.end();
}

server.listen(3000, function () {
  console.log("Server is listening on port 3000.  Ready to accept requests!");
});
