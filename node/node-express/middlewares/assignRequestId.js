const uuid = require("uuid");

// assign UUID to requests to easily trace logs when required
module.exports = (req, res, next) => {
  req.id = uuid.v4();
  next();
};
