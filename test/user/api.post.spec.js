const request = require('supertest');
const expect = require('chai').expect;

const app = require('../../src/frameworks/webserver/app');

const mockResponse = require('../__mock__/user/response');

describe('POST /api/v1/users', function () {
  const url = '/api/v1/users';

  describe('when user given invalid data', function () {
    it('should return 400 with errors message', function (done) {
      request(app)
        .post(url)
        .send({ email: 'example.email' })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.deep.equal(mockResponse.postWithInvalidBody());
          return done();
        });
    });
  });
});
