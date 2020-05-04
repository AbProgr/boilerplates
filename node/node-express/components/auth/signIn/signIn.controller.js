const { signInHandler } = require("./signIn.model");

const signInController = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const data = await signInHandler(email, password);
      res.status(200).json({ status: "success", statusCode: 200, data });
    } catch ({ message }) {
      res.status(403).json({ status: "error", error: message, data: null });
    }
  }
};

module.exports = {
  signInController,
};
