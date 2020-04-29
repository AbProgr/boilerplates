// access db and send return data/error from here
// decoupled from express and easier to test business logic

const testHandler = () => ({ status: "Ok" });

module.exports = {
  testHandler,
};
