let { expect } = require('chai');
const request = require('supertest');
const { v4: uuidv4 } = require('uuid');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

describe('GET /api/v1/books?slug=', () => {
  const url = '/api/v1/books';
  const table = 'books';

  describe('given empty data', () => {
    it('should return message with book not found', (done) => {
      const response = {
        status: 'OK',
        code: 200,
        message: 'Book Not Found',
      };

      request(app)
        .get(`${url}?slug=example-slug`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(response);
          return done();
        });
    });
  });

  describe('given a data', () => {
    const book_id = uuidv4();
    const mockData = [
      {
        book_id,
        title: 'Naruto Shippuden',
        slug: 'naruto-shippuden',
        author: 'Masashi KishiMoto',
        city: null,
        publisher: null,
        year: null,
        type: null,
        desc: null,
        file: 'example.pdf',
      },
    ];

    before(async () => {
      await database.insert(mockData).into(table);
    });

    it('should return a detail of book', (done) => {
      const response = {
        status: 'OK',
        code: 200,
        data: {
          book_id,
          title: 'Naruto Shippuden',
          slug: 'naruto-shippuden',
          author: 'Masashi KishiMoto',
          city: null,
          publisher: null,
          year: null,
          type: null,
          desc: null,
          file: 'example.pdf',
        },
      };

      request(app)
        .get(`${url}?slug=naruto-shippuden`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(response);
          return done();
        });
    });

    after(async () => {
      await database(table).del();
    });
  });
});
