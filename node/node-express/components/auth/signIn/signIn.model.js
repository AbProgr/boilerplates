const signInHandler = async (email, password) => {
  if (email === "test@test.com") {
    return {
      name: "test.user",
      email: "test@test.com",
      token: "some_gibberish_text",
    };
  } else {
    throw new Error("Invalid user credentials");
  }
};

module.exports = {
  signInHandler,
};
