const request = require('supertest');
const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');
const { v4: uuidv4 } = require('uuid');
const { hash } = require('../../src/frameworks/utils/hasher');

const getUserToken = async () => {
  await database('users').del();

  await database('users').insert({
    user_id: uuidv4(),
    name: 'skuy ngoding',
    username: 'skuy',
    email: 'example@co',
    password: hash('@Pass123'),
  });

  const loggedIn = await request(app).post('/api/v1/auth/login').send({
    username: 'skuy',
    password: '@Pass123',
  });

  return loggedIn.body.token;
};

module.exports = getUserToken;
