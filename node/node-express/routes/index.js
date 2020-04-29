const express = require("express");

const { exampleRouter } = require("../components/example");

const router = express.Router();

// sub route to test
router.use("/test", exampleRouter);

module.exports = router;
