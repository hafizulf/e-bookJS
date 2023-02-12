let { expect } = require('chai');
const request = require('supertest');
const { v4: uuidv4 } = require('uuid');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

describe('POST /api/v1/books', () => {
  const url = '/api/v1/books';
  const table = 'books';

  describe('given invalid body', () => {
    it('should return response with errors message', (done) => {
      const body = {};

      request(app)
        .post(url)
        .send(body)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.errors).to.deep.equal({
            title: ['required'],
            author: ['required'],
            file: ['required'],
          });
          return done();
        });
    });
  });

  describe('given valid body', () => {
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

    it('should created successfully', (done) => {
      const response = {
        status: 'CREATED',
        code: 201,
        message: 'Book has been created',
      };

      const body = { title: 'test', author: 'test', file: 'test.pdf' };

      request(app)
        .post(url)
        .send(body)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.deep.equal(response);
          return done();
        });
    });

    after(async () => {
      await database(table).del();
    });
  });
});
