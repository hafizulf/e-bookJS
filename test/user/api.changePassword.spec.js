const { expect } = require('chai');
const request = require('supertest');

const database = require('../../src/frameworks/database/knex');
const app = require('../../src/frameworks/webserver/app');

const mockData = require('../__mock__/user/data');

describe('POST /api/v1/users/change-password', () => {
  const url = '/api/v1/users/change-password';
  const table = 'users';

  describe('given wrong old password', () => {
    let user_id;

    before(async () => {
      await request(app).post('/api/v1/users/').send(mockData[0]);
      const result = await database.select().table(table);
      user_id = result[0].user_id;
    });

    it('should return error confirmation password', (done) => {
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

    after(async () => {
      await database(table).del();
    });
  });
});
