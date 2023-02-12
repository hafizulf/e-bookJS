let { expect } = require('chai');
const request = require('supertest');
const { v4: uuidv4 } = require('uuid');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

describe('GET /api/v1/books', () => {
  const url = '/api/v1/books';
  const table = 'books';

  describe('given empty data', () => {
    it('should return empty array, etc', (done) => {
      const response = {
        status: 'OK',
        code: 200,
        data: [],
      };

      request(app)
        .get(url)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(response);
          return done();
        });
    });
  });

  describe('given list of data', () => {
    const mockData = [
      {
        book_id: uuidv4(),
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

    it('should return list of books', (done) => {
      const response = {
        status: 'OK',
        code: 200,
        data: mockData,
      };

      request(app)
        .get(url)
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
