/**
 * @file This file contains all the logic for starting the
 * server through index.js.
 *
 * @author
 * @date
 *
 */
import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import networkLogger from './helpers/networkLogger';
import { bodyParserJSON, bodyParserURLEncoded, helmetUsage } from './apis/middleware';
import loadConfiguration from './config';
import loadRoutes from './apis/routes';
import { errorLog } from './helpers/genericLogger';

const app = express();

// middleware settings for the express server
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use(helmetUsage);
app.use(networkLogger);

// load the necessary process.env files
loadConfiguration();

// load all the possible routes
loadRoutes(app);

// swagger implementation
const swaggerDefinition = {
  info: {
    title: 'Nodejs Auth server',
    version: '1.0.0',
    description: 'Endpoints to test the routes',
  },
  host: process.env.hostURL,
  basePath: '/',
  securityDefinitions: {
    bearerAuth: {
    },
  },
};

const options = {
  swaggerDefinition,
  apis: [`${__dirname}/**/*.js`],
};


const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

process.on('unhandledRejection', (error) => {
  errorLog.error(`unhandledRejection ${error.message}`);
});

// TODO - Below line is not a ES6 standard but it is needed for supertest API testing

module.exports = app;
// export default app;
