const http = require('http');
const https = require('https');

const hostname = 'your_server_host';
const port = 8080;

let server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`Hello, ${req.url}`);
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
