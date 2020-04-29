// validate request and extract required info/params
// and pass the same to model for DB access or any business logic activity
// this layer is just responsible to accept request and send response to/from models

const { testHandler } = require("./example.model");

const test = (req, res) => res.status(200).json(testHandler());

module.exports = {
  test,
};
