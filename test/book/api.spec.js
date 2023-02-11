let chai,
  { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/app');
const database = require('../../src/frameworks/database/knex');

describe('books API', () => {
  const url = '/api/v1/books';

  const mockData = [
    {
      book_id: 1,
      title: 'Naruto',
      author: 'Masashi KishiMoto',
      city: null,
      publisher: null,
      year: null,
      type: null,
      desc: null,
      file: 'example.pdf',
    },
    {
      book_id: 2,
      title: 'One Piece',
      author: 'Eichiro Oda',
      city: null,
      publisher: null,
      year: null,
      type: null,
      desc: null,
      file: 'example.pdf',
    },
  ];

  describe('seed books', () => {
    it('should insert new books', async () => {
      await database.raw('ALTER TABLE ' + 'books' + ' AUTO_INCREMENT = 1'); // resetting auto increment
      await database.insert(mockData).into('books');
    });
  });

  describe('API GET /books', () => {
    describe('given existing data', () => {
      after(async () => {
        await database('books').del();
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
            done();
          });
      });
    });

    describe('given empty data', () => {
      it('should return empty array', (done) => {
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
            done();
          });
      });
    });
  });

  describe('API POST /books', () => {
    describe('given invalid body', () => {
      it('should return response with errors message', (done) => {
        const body = {};

        request(app)
          .post(url)
          .send(body)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.errors).to.deep.equal({
              title: ['title is a required field'],
              author: ['author is a required field'],
              file: ['file is a required field'],
            });
            return done();
          });
      });
    });

    describe('given valid body', () => {
      it('should created successfully', (done) => {
        const body = { title: 'test', author: 'test', file: 'test.pdf' };

        request(app)
          .post(url)
          .send(body)
          .end((err, res) => {
            expect(res.status).to.equal(201);
            return done();
          });
      });
    });

    after(async () => {
      await database('books').del();
    });
  });
});
