const morgan = require('morgan');
const logger = require('../utils/logger');

morgan.token('id', (req) => req.id);

logger.stream = {
  write: (message) => logger.info(message.substring(0, message.lastIndexOf('\n'))),
};

module.exports = morgan(
  ':id :method :url :status :response-time ms - :res[content-length]',
  { stream: logger.stream },
);
