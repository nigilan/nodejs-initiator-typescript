/**
 * @file This file contains the logic to produce uniform logging system for network traffic.
 * It also writes to filesystem in production environment
 *
 *
 * @author
 * @date
 *
 */

import morgan from 'morgan';
import path from 'path';
import fs from 'fs';

const rfs = require('rotating-file-stream');

const logDirectory = path.join(process.cwd(), 'networklog');

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const accessLogStream = rfs.createStream('networktraffic.log', {
  interval: '1d', // rotate daily
  compress: 'gzip', // compress rotated files
  path: logDirectory,
});

const networkLogger = morgan('combined', { stream: accessLogStream });
export default networkLogger;
