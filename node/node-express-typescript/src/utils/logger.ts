import path from 'path';
import { createLogger, transports, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const ignorePrivate = format((info) => {
  if (info.private) {
    return false;
  }
  return info;
});

const generateFileOptions = (type: string) => ({
  level: type,
  filename: path.join('logs', type, `%DATE%.${type}.log`),
  prepend: true,
  json: true,
  maxsize: 5242880,
  maxFiles: 5,
});

export const logger = createLogger({
  format: format.combine(
    ignorePrivate(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.printf(
      (info) =>
        `${info.timestamp} | ${info.level.toUpperCase()} | ${info.message}`,
    ),
  ),
  transports: [
    new DailyRotateFile(generateFileOptions('error')),
    new DailyRotateFile(generateFileOptions('info')),
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
    }),
  ],
  exceptionHandlers: [new DailyRotateFile(generateFileOptions('exceptions'))],
  exitOnError: false,
});

export default logger;
