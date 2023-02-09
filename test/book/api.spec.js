let chai,
  { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/app');
const database = require('../../src/frameworks/database/knex');

describe('books API', () => {
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

  describe('/books -> with existing data', () => {
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
        .get('/books')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(response);
          done();
        });
    });
  });

  describe('/books -> with empty data', () => {
    it("should return empty array if result doesn't exist", (done) => {
      const response = {
        status: 'OK',
        code: 200,
        data: [],
      };

      request(app)
        .get('/books')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(response);
          done();
        });
    });
  });
});
