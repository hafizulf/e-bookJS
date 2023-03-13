const { expect } = require('chai');
const request = require('supertest');
const sinon = require('sinon');
const { v4: uuidv4 } = require('uuid');
const { hash } = require('../../src/frameworks/utils/hasher');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');
const jwt = require('../../src/frameworks/utils/jsonWebToken');

const mockData = require('../__mock__/user/data');
const mockResponse = require('../__mock__/auth/response');

describe('POST /api/v1/auth/login', function () {
  const url = '/api/v1/auth/login';

  describe('when given invalid data', function () {
    describe('given empty data', function () {
      it('should return error message', (done) => {
        request(app)
          .post(url)
          .send({})
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.deep.equal(mockResponse.loginWithEmptyData());
            done();
          });
      });
    });

    describe('given unknown email', () => {
      it('should return user not found', (done) => {
        request(app)
          .post(url)
          .send({ email: 'xyz', password: 'xyz123' })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.deep.equal(
              mockResponse.loginWithUserNotFound()
            );
            done();
          });
      });
    });

    describe('given invalid password', () => {
      before(async () => {
        await database('users').del();

        await database('users').insert({
          user_id: uuidv4(),
          name: 'skuy ngoding',
          username: 'skuy',
          email: 'example@co',
          password: hash('@Pass123'),
        });
      });

      it('should return error -> invalid password', (done) => {
        request(app)
          .post(url)
          .send({ email: 'example@co', password: 'xyz123' })
          .end((err, res) => {
            expect(res.status).to.equal(401);
            expect(res.body).to.deep.equal(
              mockResponse.loginWithInvalidPassword()
            );
            done();
          });
      });
    });
  });

  describe('when given valid data', function () {
    it('should logged in successfully and return user token', (done) => {
      const tokenStub = 'fake_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
      const jwtStub = sinon.stub(jwt, 'getToken').returns(tokenStub);

      request(app)
        .post(url)
        .send({ email: 'example@co', password: mockData[0].password })
        .end((err, res) => {
          expect(jwtStub.calledOnce).to.be.true;
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal({
            status: 'OK',
            code: 200,
            token: tokenStub,
          });
          done();
        });
    });

    after(async () => {
      sinon.restore();

      await database('users').del();
    });
  });
});
