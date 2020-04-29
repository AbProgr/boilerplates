const express = require("express");

const { test } = require("./example.controller");

const router = express.Router();

// test route to check nested routing works fine
router.get("/", test);

module.exports = router;