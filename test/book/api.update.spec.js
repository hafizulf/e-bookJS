let { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

const mockData = require('../__mock__/book/data');

describe('PUT /api/v1/books', () => {
  const url = '/api/v1/books';
  const table = 'books';

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

  describe('given exist data', () => {
    before(async () => {
      await database.insert(mockData).into(table);
    });

    describe('given invalid body', () => {
      it('should return errors message', (done) => {
        request(app)
          .put(`${url}/${mockData[0].book_id}`)
          .send({ title: 12345 })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.deep.equal({
              status: 'BAD_REQUEST',
              code: 400,
              errors: {
                title: [
                  'title must be a `string` type, but the final value was: `12345`.',
                ],
              },
            });
            return done();
          });
      });
    });

    describe('given valid body', () => {
      it('should successfully updated', (done) => {
        request(app)
          .put(`${url}/${mockData[0].book_id}`)
          .send({ title: 'Naruto Shippuden 4' })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.deep.equal({
              status: 'OK',
              code: 200,
              message: 'Book has been updated',
            });
            return done();
          });
      });
    });

    after(async () => {
      await database(table).del();
    });
  });
});
