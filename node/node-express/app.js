// require npm modules
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// require our own modules
const { httpLogger, assignRequestId } = require("./middlewares");
const { AppError } = require("./utils");
const routes = require("./routes");

const app = express();
app.set("trust proxy", true);

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
  next(new AppError(req.id, req.ip, "No such endpoint", "ROUTE_NOT_FOUND"));
});

// default express error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  }
  err.handle();
  res.status(500).json(err);
});

module.exports = app;
