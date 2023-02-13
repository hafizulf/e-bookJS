let { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

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

  describe('given data exist', () => {
    before(async () => {
      await database.insert(deleteOne.mockData).into(table);
    });

    it('should deleted successfully', (done) => {
      request(app)
        .delete(`${url}/${deleteOne.book_id}`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(deleteOne.withExistData());
          return done();
        });
    });

    after(async () => {
      await database(table).del();
    });
  });
});
