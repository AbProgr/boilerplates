const httpLogger = require('./httpLogger');
const assignRequestId = require('./assignRequestId');

// export all middlewares from index to minimize the number of requires
module.exports = {
  httpLogger,
  assignRequestId,
};
