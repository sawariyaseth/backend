const requireExpress = () => {
  try {
    return require('express'); 
    } catch (e) {
    return null;
    }
};

const express = requireExpress();

if (express) {
  const app = express();
  const port = 4000;
  
  app.get('/', (req, res) => {
    res.send('moderndeployment');
  });
    app.get('/health', (req, res) => {
    res.send('OK');
    }); 
    app.get('/ready', (req, res) => {
    res.send('READY');
  });
    app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    });
} else {
  const http = require('http');

  const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('moderndeployment');
    } else if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('OK');
    } else if (req.url === '/ready') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('READY');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });

  server.listen(3000, () => {
    console.log("server is listening on port 3000");
  });
}   