let { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

const mockData = require('../__mock__/book/data');
const mockResponse = require('../__mock__/book/response');

describe('POST /api/v1/books', () => {
  const url = '/api/v1/books';
  const table = 'books';

  describe('given invalid body', () => {
    it('should return errors message', (done) => {
      request(app)
        .post(url)
        .send({}) // send invalid body
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.errors).to.deep.equal(
            mockResponse.postWithInvalidBody()
          );
          return done();
        });
    });
  });

  describe('given valid body', () => {
    it('should created successfully', (done) => {
      request(app)
        .post(url)
        .send(mockData[0])
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.deep.equal(mockResponse.postWithValidBody());
          return done();
        });
    });

    after(async () => {
      await database(table).del();
    });
  });
});
