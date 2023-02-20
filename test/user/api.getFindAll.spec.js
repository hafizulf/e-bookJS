let { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

const mockData = require('../__mock__/user/data');
const mockResponse = require('../__mock__/user/response');

const cache = require('../../src/frameworks/middleware/cache');

describe('GET /api/v1/users', () => {
  const url = '/api/v1/users';
  const table = 'users';

  describe('given empty data', () => {
    it('should return empty array, etc', (done) => {
      request(app)
        .get(url)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(mockResponse.findAndReturnEmptyData());
          return done();
        });
    });
  });

  describe('given list of data', () => {
    before(async () => {
      cache.del(url);
      await database.insert(mockData).into(table);
    });

    it('should return list of users', (done) => {
      request(app)
        .get(url)
        .end((err, res) => {
          delete res.body.data[0].created_at; // ignore for now
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(mockResponse.findAndReturnListData());
          return done();
        });
    });

    after(async () => {
      await database(table).del();
    });
  });
});
