// require npm modules
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// require our own modules
const { httpLogger, assignRequestId } = require("./middlewares");
const { ErrorHandler, handleError } = require("./utils");
const routes = require("./routes");

const app = express();

// register middlewares with express
app.use(helmet());
app.use(express.json());
app.options("*", cors());
app.use(assignRequestId);
app.use(httpLogger);

// register route handler
app.use("/api", routes);

// not found error handler
app.use((req, res, next) => {
  next(new ErrorHandler(404, "Not found"));
});

// default express error handler
app.use((err, req, res, next) => {
  next(handleError(err, res));
});

module.exports = app;