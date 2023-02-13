let { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

const mockData = require('../__mock__/book/data');
const deleteOne = require('../__mock__/book/deleteOne');

describe('DELETE /api/v1/books', () => {
  const url = '/api/v1/books';
  const table = 'books';

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

  describe('given exist data', () => {
    before(async () => {
      await database.insert(mockData).into(table);
    });

    it('should deleted successfully', (done) => {
      request(app)
        .delete(`${url}/${mockData[0].book_id}`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(deleteOne.withExistData());
          return done();
        });
    });

    it('should return empty table', async () => {
      const result = await database.select().table(table);
      expect(result).to.deep.equal([]);
    });
  });
});
