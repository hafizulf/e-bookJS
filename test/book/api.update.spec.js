let { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/webserver/app');

describe('PUT /api/v1/books', () => {
  const url = '/api/v1/books';

  describe('given empty data', () => {
    it('should return book not found', (done) => {
      request(app)
        .put(`${url}/example-book-id`)
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.deep.equal({
            status: 'BAD_REQUEST',
            code: 400,
            message: 'Book Not Found',
          });
          return done();
        });
    });
  });
});
