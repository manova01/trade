const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Ensure we are in a production environment
const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

// cPanel provides the port through the PORT environment variable
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
