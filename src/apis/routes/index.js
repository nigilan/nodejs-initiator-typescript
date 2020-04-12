/**
 * @file This file lists all the indexes of the possible routes present in the application
 *
 *
 * @author
 * @date
 *
 */

import sampleRouter from './sample';


export default function loadRoutes(app) {
  app.use('/', sampleRouter);
}
