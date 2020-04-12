/**
 * @file This file is for reference. This is a sample test file.
 * Trying to run a few API tests using supertest and mocha
 *
 * @author
 * @date
 *
 */

/**
 * Piece of code below runs when the server is up and running.
 * But, that is not a suitable scenario for the testing in jenkins env
 * Keeping this just for reference
 */

// const request = require('supertest');

// describe('GET /user', function() {
//     it('responds with json', function(done) {
//       request('http://localhost:3000')
//         .get('/test')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
// });


const supertest = require('supertest');
const app = require('../../dist/server');

const request = supertest(app);

describe('GET /test', () => {
  let server;
  before((done) => {
    console.log('API test server started');
    server = app.listen(0, done);
  });

  after(() => {
    server.close(() => {
      // Dont forget to close the mongoDB connections
      // mongoose.connection.close();
      console.log('API test server closed after running tests');
    });
  });

  it('responds with json', (done) => {
    request.get('/test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
