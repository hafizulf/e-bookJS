const request = require('supertest');
const { expect } = require('chai');
const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

describe('POST /api/v1/auth/register', function () {
  const url = '/api/v1/auth/register';

  describe('when given invalid data', function () {
    it('should return error message', (done) => {
      request(app)
        .post(url)
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.deep.equal({
            status: 'BAD_REQUEST',
            code: 400,
            errors: {
              username: 'required',
              email: 'required',
              password: 'required',
            },
          });
          done();
        });
    });
  });

  describe('given valid data', function () {
    it('should return successfully created user', (done) => {
      request(app)
        .post(url)
        .send({
          username: 'example',
          email: 'example@co.id',
          password: '@Example321',
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.deep.equal({
            status: 'CREATED',
            code: 201,
            message: 'User has been created',
          });
          return done();
        });
    });

    after(async () => {
      await database.del().where('username', 'example').table('users');
    });
  });
});
