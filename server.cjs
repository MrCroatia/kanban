const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Set correct MIME types
app.get('*.js', (req, res, next) => {
  res.set('Content-Type', 'application/javascript');
  next();
});

app.get('*.css', (req, res, next) => {
  res.set('Content-Type', 'text/css');
  next();
});

app.get('*.svg', (req, res, next) => {
  res.set('Content-Type', 'image/svg+xml');
  next();
});

// For any other request, send index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
