/**
 * @file This file contains the logic to produce uniform logging system for application code.
 * It also writes to filesystem in production environment
 *
 *
 * @author
 * @date
 *
 */

import winston from 'winston';
import fs from 'fs';
import WinstonDailyRotateFile from 'winston-daily-rotate-file';

const env = process.env.NODE_ENV.trim();
const logDir = 'applicationlog';

// create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}


const successLogger = winston.createLogger({
  transports: [
    new (winston.transports.Console)({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
    new (WinstonDailyRotateFile)({
      filename: `${logDir}/results-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      level: 'info',
      maxSize: '10m',
      maxFiles: '15d',
    }),
  ],
});

const errorLogger = winston.createLogger({
  transports: [
    new (winston.transports.Console)({
      level: 'error',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
    new (WinstonDailyRotateFile)({
      filename: `${logDir}/error-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      level: 'error',
      maxSize: '10m',
      maxFiles: '15d',
    }),
  ],
});

const console = new winston.transports.Console();
if (env === 'production') {
  errorLogger.remove(console);
  successLogger.remove(console);
}

export const successLog = successLogger;
export const errorLog = errorLogger;
