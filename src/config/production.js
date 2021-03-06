/**
 * @file This file is the loads the process.env with production environment variables
 *
 *
 * @author
 * @date
 *
 */


const config = {
  env: 'production',
  port: 3002,
  hostURL: 'localhost',
};

process.env.NODE_ENV = process.env.NODE_ENV.trim();
if (process.env.NODE_ENV === 'production') {
  process.env.NODE_PORT = config.port;

  // HostURL, primarily for Swagger but not limited to it
  process.env.hostURL = `${config.hostURL}:${config.port}`;
}


export default function productionConfig() {
  return config;
}
