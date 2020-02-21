const logger = require('./logger');
const { ErrorHandler, handleError } = require('./errorHandler');

// export all utils from index to minimize the number of requires
module.exports = {
  logger,
  ErrorHandler,
  handleError,
};
