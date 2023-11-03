const http = require("http"); //import http module

http.createServer((req, res) => {
  res.writeHead(200, {'content-Type': 'text/plain'});
  res.end('Hello World\n')
}).listen(8081);

console.log("Server running on port 8080");

var moment = require('moment'); // require
moment().format(); 
