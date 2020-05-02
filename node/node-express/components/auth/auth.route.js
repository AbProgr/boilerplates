const express = require("express");

const { signInController } = require("./signIn/signIn.controller");

const router = express.Router();

router.post("/signIn", signInController);

module.exports = router;
