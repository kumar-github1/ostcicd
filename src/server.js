// src/server.js
const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app; // For testing
