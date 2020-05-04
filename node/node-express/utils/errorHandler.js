const logger = require("./logger");

module.exports = class AppError extends Error {
  constructor(
    requestId,
    ipAddress,
    message = "Internal Server Error",
    errorCode = "GENERIC_ERROR"
  ) {
    super();
    this.status = "error";
    this.errorCode = errorCode;
    this.message = message;
    this.meta = {
      requestId,
      ipAddress,
    };
  }

  handle() {
    const {
      errorCode,
      message,
      meta: { requestId, ipAddress },
    } = this;
    logger.error(
      `${requestId} | ${ipAddress} | ${errorCode.toUpperCase()} | ${message}`
    );
    return this;
  }
};
