const { signInHandler } = require("./signIn.model");

const signInController = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const data = await signInHandler(email, password).catch((err) => {
      res.status(403).json({ status: "error", error: err, data: null });
    });
    res.status(200).json({ status: "success", statusCode: 200, data });
  }
};

module.exports = {
  signInController,
};
