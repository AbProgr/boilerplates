const { createLogger, transports, format } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const ignorePrivate = format((info) => {
  if (info.private) { return false; }
  return info;
});

const generateFileOptions = (type) => ({
  level: type,
  filename: `./logs/${type}/%DATE%.${type}.log`,
  prepend: true,
  json: true,
  maxsize: 5242880,
  maxFiles: 5,
});

module.exports = createLogger({
  format: format.combine(
    ignorePrivate(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.printf((info) => `${info.timestamp} - ${info.level}: ${info.message}`),
  ),
  transports: [
    new DailyRotateFile(generateFileOptions('error')),
    new DailyRotateFile(generateFileOptions('info')),
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
  ],
  exceptionHandlers: [
    new DailyRotateFile(generateFileOptions('exceptions')),
  ],
  exitOnError: false,
});
