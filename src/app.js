// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());

// Example route
app.get('/', (req, res) => {
  res.json({
    author: 'Nish Patel',
    githubUrl: 'https://github.com/Nish4125/fragments'
  });
});

module.exports = app;
