// http.js
const http = require('http');

// Create an HTTP server that responds with a message to all requests.
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('This is for Qap1\n');
});

// Listen on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server is running at http://localhost:3000/');
});

