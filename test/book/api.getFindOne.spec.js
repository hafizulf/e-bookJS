let { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

const mockData = require('../__mock__/book/data');
const mockResponse = require('../__mock__/book/response');

describe('GET /api/v1/books?slug=', () => {
  const url = '/api/v1/books';
  const table = 'books';

  describe('given empty data', () => {
    it('should return message with book not found', (done) => {
      request(app)
        .get(`${url}?slug=example-slug`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(
            mockResponse.findAndReturnDataNotFound()
          );
          return done();
        });
    });
  });

  describe('given a data', () => {
    before(async () => {
      await database.insert(mockData).into(table);
    });

    it('should return a detail of book', (done) => {
      request(app)
        .get(`${url}?slug=naruto-shippuden`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(
            mockResponse.findAndReturnDetailData()
          );
          return done();
        });
    });

    after(async () => {
      await database(table).del();
    });
  });
});
