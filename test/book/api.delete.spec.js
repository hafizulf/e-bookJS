let { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/webserver/app');

const deleteOne = require('../__mock__/book/deleteOne');

describe('DELETE /api/v1/books', () => {
  const url = '/api/v1/books';

  describe('given data not found', () => {
    it('should return message with book not found', (done) => {
      request(app)
        .delete(`${url}/failed-id`)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.deep.equal(deleteOne.withEmptyData());
          return done();
        });
    });
  });
});
