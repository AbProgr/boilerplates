const express = require("express");

const { exampleRouter } = require("../components/example");
const { authRouter } = require("../components/auth");

const router = express.Router();

// sub route to test
router.use("/test", exampleRouter);

// use /auth as base for all auth related endpoints
router.use("/auth", authRouter);

module.exports = router;
