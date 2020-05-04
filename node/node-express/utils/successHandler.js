module.exports = class SuccessResponse {
  constructor(requestId, ipAddress, data, status = "success") {
    this.status = status;
    this.data = data;
    this.meta = {
      requestId,
      ipAddress,
    };
  }
};
