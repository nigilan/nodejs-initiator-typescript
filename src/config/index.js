/**
 * @file This file is the decides the process.env variables based on the value that is passed during
 * starting of the server
 *
 *
 * @author
 * @date
 *
 */

import developmentConfig from './development';
import stagingConfig from './staging';
import productionConfig from './production';

// NODE_ENV is being passed from command line and need to trim spaces at end
process.env.NODE_ENV = process.env.NODE_ENV.trim();
if (process.env.NODE_ENV === 'development') {
  developmentConfig();
} else if (process.env.NODE_ENV === 'staging') {
  stagingConfig();
} else if (process.env.NODE_ENV === 'production') {
  productionConfig();
} else {
  developmentConfig();
}

export default function loadConfiguration() { }
