const { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');

const mockData = require('../__mock__/user/data');
const mockResponse = require('../__mock__/user/response');

describe('DELETE /api/v1/users', () => {
  const url = '/api/v1/users';
  const table = 'users';

  describe('given data not found', () => {
    it('should return message with user not found', (done) => {
      request(app)
        .delete(`${url}/example_user_id`)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.deep.equal(
            mockResponse.putOrDeleteReturnEmptyData()
          );
          return done();
        });
    });
  });

  describe('given exist data', () => {
    let user_id;

    before(async () => {
      await request(app).post(url).send(mockData[0]);
      const result = await database.select().table(table);
      user_id = result[0].user_id;
    });

    it('should deleted successfully', (done) => {
      request(app)
        .delete(`${url}/${user_id}`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(mockResponse.deleteWithExistData());
          return done();
        });
    });

    it('should return empty data', async () => {
      const result = await database.select().table(table);
      expect(result).to.deep.equal([]);
    });
  });
});