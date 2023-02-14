let { expect } = require('chai');
const request = require('supertest');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

const mockData = require('../__mock__/book/data');
const mockResponse = require('../__mock__/book/response');

describe('PUT /api/v1/books', function () {
  this.timeout(10000);

  const url = '/api/v1/books';
  const table = 'books';

  describe('given empty data', function () {
    it('should return book not found', function (done) {
      request(app)
        .put(`${url}/example-book-id`)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.deep.equal(
            mockResponse.putOrDeleteReturnEmptyData()
          );
          return done();
        });
    });
  });

  describe('given exist data', function () {
    before(async function () {
      await database.insert(mockData).into(table);

      fs.writeFileSync('uploads/books/sample.pdf', 'Sample PDF File');
    });

    describe('given invalid body', function () {
      describe('given empty body', function () {
        it('should return errors message', function (done) {
          request(app)
            .put(`${url}/${mockData[0].book_id}`)
            .send({})
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body).to.deep.equal(mockResponse.putWithEmptyBody());
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
            .put(`${url}/${mockData[0].book_id}`)
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
          time = moment(new Date()).format('DDMMYYYYHHmmss');

          const filePath = path.resolve(
            __dirname + '/../__mock__/book/sample-max.pdf'
          );

          request(app)
            .put(`${url}/${mockData[0].book_id}`)
            .attach('file', filePath)
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body).to.deep.equal(
                mockResponse.resBodyInvalidFileSize()
              );
              return done();
            });
        });

        after(async function () {
          fs.unlinkSync('uploads/books/sample-' + time + '.txt');
          fs.unlinkSync('uploads/books/sample-max-' + time + '.pdf');
        });
      });
    });

    describe('given valid body', function () {
      let time;

      it('should successfully updated', function (done) {
        time = moment(new Date()).format('DDMMYYYYHHmmss');

        const filePath = path.resolve(
          __dirname + '/../__mock__/book/sample.pdf'
        );

        request(app)
          .put(`${url}/${mockData[0].book_id}`)
          .field('title', mockData[0].title)
          .field('author', mockData[0].author)
          .field('city', mockData[0].city)
          .field('publisher', mockData[0].publisher)
          .field('year', mockData[0].year)
          .field('type', mockData[0].type)
          .field('desc', mockData[0].desc)
          .attach('file', filePath)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.deep.equal(mockResponse.putWithValidBody());
            return done();
          });
      });

      after(function () {
        fs.unlinkSync('uploads/books/sample-' + time + '.pdf');
      });
    });

    after(async function () {
      await database(table).del();
    });
  });
});
