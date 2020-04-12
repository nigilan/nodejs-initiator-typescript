/**
 * @file This file is the loads the process.env with staging environment variables
 *
 *
 * @author
 * @date
 *
 */


const config = {
  env: 'staging',
  port: 3001,
  hostURL: 'localhost',
};

process.env.NODE_ENV = process.env.NODE_ENV.trim();
if (process.env.NODE_ENV === 'staging') {
  process.env.NODE_PORT = config.port;

  // HostURL, primarily for Swagger but not limited to it
  process.env.hostURL = `${config.hostURL}:${config.port}`;
}


export default function stagingConfig() {
  return config;
}
