const { signInHandler } = require("./signIn.model");
const { AppError, SuccessResponse } = require("../../../utils");

const signInController = async (req, res) => {
  const {
    body: { email, password },
    id,
    ip,
  } = req;
  if (email && password) {
    try {
      const data = await signInHandler(email, password);
      res.status(200).json(new SuccessResponse(id, ip, data));
    } catch ({ message }) {
      const err = new AppError(id, ip, message, "AUTH_FAILURE").handle();
      res.status(401).json(err);
    }
  }
};

module.exports = {
  signInController,
};
