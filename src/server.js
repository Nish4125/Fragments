// src/server.js
const http = require('http');
const stoppable = require('stoppable');
const app = require('./app');
const logger = require('./logger');

const port = process.env.PORT || 8080;

const server = stoppable(http.createServer(app), 0);

server.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
