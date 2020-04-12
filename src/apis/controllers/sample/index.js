/**
 * @file This file is for reference. There is an equivalent route file,
 * where these functions are get invoked
 * If you have models, this is the place to call them
 *
 * @author
 * @date
 *
 */

export default function sampleGetRequest(req, res) {
  // can access req and res in here
  return res.status(200).send({ message: `Server is running at ${process.env.NODE_PORT}. GET request` });
}
