// require npm modules
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// require our own modules
const { httpLogger, assignRequestId } = require('./middlewares');
const { logger, ErrorHandler, handleError } = require('./utils');
const routes = require('./routes');

const app = express();
const host = 'localhost';
const port = 3000;

// register middlewares with express
app.use(helmet());
app.use(express.json());
app.options('*', cors());
app.use(assignRequestId);
app.use(httpLogger);

// register route handler
app.use('/api', routes);

// not found error handler
app.use((req, res, next) => {
  next(new ErrorHandler(404, 'Not found'));
});

// default express error handler
app.use((err, req, res, next) => {
  next(handleError(err, res));
});

// start express server
app.listen(port, host, (err) => {
  if (err) {
    logger.error(`An Error occured while starting the server: ${err}`);
  } else {
    logger.info(`Server started succesfully at: ${host}:${port}`);
  }
});
