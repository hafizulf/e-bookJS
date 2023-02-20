const request = require('supertest');
const expect = require('chai').expect;

const database = require('../../src/frameworks/database/knex');
const app = require('../../src/frameworks/webserver/app');

const mockResponse = require('../__mock__/user/response');
const mockData = require('../__mock__/user/data');

describe('POST /api/v1/users', function () {
  const url = '/api/v1/users';
  const table = 'users';

  describe('when user given invalid data', function () {
    it('should return 400 with errors message', function (done) {
      request(app)
        .post(url)
        .send({ email: 'example.email', password: '@pass' })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.deep.equal(mockResponse.postWithInvalidBody());
          return done();
        });
    });
  });

  describe('when user given valid data', function () {
    it('should return 201 with successfully created', function (done) {
      request(app)
        .post(url)
        .send(mockData)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.deep.equal(mockResponse.postWithValidBody());
          return done();
        });
    });

    it('should return inserted data', async function () {
      const user = await database
        .select()
        .table(table)
        .where('username', mockData.username)
        .first();

      expect(user.username).to.equal(mockData.username);
      expect(user.email).to.equal(mockData.email);
      expect(user.password).to.equal(mockData.password);
    });

    after(async function () {
      await database(table).del();
    });
  });
});
