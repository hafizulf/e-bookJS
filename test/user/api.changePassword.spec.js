const { expect } = require('chai');
const request = require('supertest');

const database = require('../../src/frameworks/database/knex');
const app = require('../../src/frameworks/webserver/app');
const { compare } = require('../../src/frameworks/utils/hasher');

const mockData = require('../__mock__/user/data');

describe('POST /api/v1/users/change-password/:user_id', function () {
  const url = '/api/v1/users/change-password';
  const table = 'users';

  describe('user not found', function () {
    it('should return error user not found', (done) => {
      request(app)
        .post(`${url}/example_user_id`)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.deep.equal({
            status: 'BAD_REQUEST',
            code: 400,
            message: 'User Not Found',
          });
          return done();
        });
    });
  });

  let user_id;

  describe('given invalid password', function () {
    before(async () => {
      await request(app).post('/api/v1/users/').send(mockData[0]);
      const result = await database.select().table(table);
      user_id = result[0].user_id;
    });

    it('should return error password validation', (done) => {
      request(app)
        .post(`${url}/${user_id}`)
        .send({
          password: '#Pass123',
          passwordConfirmation: 'new password',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.deep.equal({
            status: 'BAD_REQUEST',
            code: 400,
            errors: {
              oldPassword: ['required'],
              passwordConfirmation: ['Password must match'],
            },
          });
          return done();
        });
    });

    it('should return error new password cannot be same with old password', (done) => {
      request(app)
        .post(`${url}/${user_id}`)
        .send({
          oldPassword: '@Pass123',
          password: '@Pass123',
          passwordConfirmation: '@Pass123',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.deep.equal({
            status: 'BAD_REQUEST',
            code: 400,
            errors: {
              password: ['New password cannot be same with old password'],
            },
          });
          return done();
        });
    });

    it('should return error old password', (done) => {
      request(app)
        .post(`${url}/${user_id}`)
        .send({
          oldPassword: '*Pass123',
          password: '#Pass123',
          passwordConfirmation: '#Pass123',
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.deep.equal({
            status: 'BAD_REQUEST',
            code: 400,
            errors: {
              oldPassword: ['Wrong old password'],
            },
          });
          return done();
        });
    });
  });

  describe('given valid password', function () {
    it('should successfully changed password', (done) => {
      request(app)
        .post(`${url}/${user_id}`)
        .send({
          oldPassword: '@Pass123',
          password: '#Pass123',
          passwordConfirmation: '#Pass123',
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal({
            status: 'OK',
            code: 200,
            message: 'Password has been updated',
          });
          return done();
        });
    });

    it('password should be updated', async function () {
      const user = await database
        .select('password')
        .table(table)
        .where('username', mockData[0].username)
        .first();

      const isMatch = compare('#Pass123', user.password);
      expect(isMatch).to.equal(true);
    });

    after(async () => {
      await database(table).del();
    });
  });
});
