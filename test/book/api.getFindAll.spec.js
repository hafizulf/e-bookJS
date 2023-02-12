let { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

const mockData = require('../__mock__/book/data');
const findAll = require('../__mock__/book/getFindAll');

describe('GET /api/v1/books', () => {
  const url = '/api/v1/books';
  const table = 'books';

  describe('given empty data', () => {
    it('should return empty array, etc', (done) => {
      request(app)
        .get(url)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(findAll.getEmptyData());
          return done();
        });
    });
  });

  describe('given list of data', () => {
    before(async () => {
      await database.insert(mockData).into(table);
    });

    it('should return list of books', (done) => {
      request(app)
        .get(url)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(findAll.getListData());
          return done();
        });
    });

    after(async () => {
      await database(table).del();
    });
  });
});
