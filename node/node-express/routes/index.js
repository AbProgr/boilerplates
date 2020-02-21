const express = require('express');

const testRouter = require('./example');

const router = express.Router();

// sub route to test
router.use('/test', testRouter);

module.exports = router;
