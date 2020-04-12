/**
 * @file This file is for reference. How to create a modular route handler
 *
 *
 * @author
 * @date
 *
 */


import express from 'express';
import sampleGetRequest from '../../controllers/sample';

const sampleRouter = express.Router();

// use sampleRoute.use to write middlewares specific to this route

// The below swagger command does not exactly represent the route at the bottom
// But, this swagger file's idea is to have all parameters to get started

/**
 * @swagger
 * /test:
 *   post:
 *     tags:
 *       - users
 *     name: User login
 *     description: Login to the application
 *     summary: Post request for user login
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userName
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *      200:
 *        description: User authentication successful
 *        headers:
 *          x-auth-token:
 *            schema:
 *              type: string
 *            description: Authorization token for future requests
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: User successfully authenticated
 *      400:
 *        description: Issue with user inputs
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Specific error message of how input went wrong
 *      404:
 *        description: User not found
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: User not found in the system
 */
sampleRouter.get('/test', sampleGetRequest);

export default sampleRouter;
