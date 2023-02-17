/**
 * JUST NOTES FOR REMINDER
 * Why Test in Github Actions Failed? while it's work in local. Is it node version?
 * Need to explore more about how to test upload file
 * Stubbing the file upload in supertest, etc
 */

let { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/webserver/app');
// const database = require('../../src/frameworks/database/knex');

const mockResponse = require('../__mock__/book/response');

describe('POST /api/v1/books', function () {
  const url = '/api/v1/books';
  // const table = 'books';

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
  });

  // describe('given valid body', function () {
  //   it('should created successfully', function (done) {
  //     request(app)
  //       .post(url)
  //       .field('title', 'coba upload')
  //       .field('author', 'coba author')
  //       .attach('file', 'test/__mock__/book/sample.pdf')
  //       .end((err, res) => {
  //         expect(res.status).to.equal(201);
  //         expect(res.body).to.deep.equal(mockResponse.postWithValidBody());
  //         return done();
  //       });
  //   });

  // after(async function () {
  //   await database(table).del();
  // });
  // });
});
