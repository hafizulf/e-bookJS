const request = require('supertest');
const expect = require('chai').expect;

const app = require('../../src/frameworks/webserver/app');

describe('POST /api/v1/users', function () {
  const url = '/api/v1/users';

  describe('when user given invalid data', function () {
    it('should return 400', function (done) {
      request(app)
        .post(url)
        .send({})
        .end((err, res) => {
          console.log(res.status);
          console.log(res.body);
          expect(res.status).to.equal(400);
          return done();
        });
    });
  });
});
