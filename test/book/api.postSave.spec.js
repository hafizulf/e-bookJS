let { expect } = require('chai');
const request = require('supertest');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

const mockResponse = require('../__mock__/book/response');

describe('POST /api/v1/books', function () {
  this.timeout(10000);

  const url = '/api/v1/books';
  const table = 'books';

  describe('given invalid body', function () {
    describe('given empty body', function () {
      it('should return errors message', function (done) {
        request(app)
          .post(url)
          .send({}) // send invalid body
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.deep.equal(mockResponse.postWithInvalidBody());
            return done();
          });
      });
    });

    describe('given invalid file type', function () {
      let time;

      it('should return error with invalid file type', function (done) {
        time = moment(new Date()).format('DDMMYYYYHHmmss');

        const filePath = path.resolve(
          __dirname + '/../__mock__/book/sample.txt'
        );

        request(app)
          .post(url)
          .field('title', 'coba upload')
          .field('author', 'author upload')
          .attach('file', filePath)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.deep.equal(
              mockResponse.resBodyInvalidFileType()
            );
            return done();
          });
      });

      it('should return error with invalid file size', function (done) {
        const filePath = path.resolve(
          __dirname + '/../__mock__/book/sample-max.pdf'
        );

        request(app)
          .post(url)
          .field('title', 'coba upload')
          .field('author', 'author upload')
          .attach('file', filePath)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.deep.equal(
              mockResponse.resBodyInvalidFileSize()
            );
            return done();
          });
      });

      after(function () {
        fs.unlinkSync('uploads/books/sample-' + time + '.txt');
        fs.unlinkSync('uploads/books/sample-max-' + time + '.pdf');
      });
    });
  });

  describe('given valid body', function () {
    let time;

    before(function () {
      time = moment(new Date()).format('DDMMYYYYHHmmss');
    });

    it('should created successfully', function (done) {
      const filePath = path.resolve(__dirname + '/../__mock__/book/sample.pdf');

      request(app)
        .post(url)
        .field('title', 'coba upload')
        .field('author', 'author upload')
        .attach('file', filePath)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.deep.equal(mockResponse.postWithValidBody());
          return done();
        });
    });

    after(async function () {
      await database(table).del();

      fs.unlinkSync('uploads/books/sample-' + time + '.pdf');
    });
  });
});
