/**
 * @file This file is the starting point of the server. This code transpiles into the dist\ folder
 *
 *
 * @author
 * @date
 *
 */
import app from './server';
import { successLog } from './helpers/genericLogger';

app.listen(process.env.NODE_PORT);

successLog.info(`Application running on port ${process.env.NODE_PORT} and in ${process.env.NODE_ENV} environment`);
