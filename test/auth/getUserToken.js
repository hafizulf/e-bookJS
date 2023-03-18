const request = require('supertest');
const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');
const { v4: uuidv4 } = require('uuid');
const { hash } = require('../../src/frameworks/utils/hasher');

const getUserToken = async () => {
  await database('users').del();

  const user_id = uuidv4();
  await database('users').insert({
    user_id,
    name: 'skuy ngoding',
    username: 'skuy',
    email: 'example@co',
    password: hash('@Pass123'),
  });

  await database('roles').del();

  const admin_role_id = uuidv4();
  const user_role_id = uuidv4();
  await database('roles').insert([
    {
      role_id: admin_role_id,
      role: 'admin',
    },
    {
      role_id: user_role_id,
      role: 'user',
    },
  ]);

  //
  await database('users_access').del();

  await database('users_access').insert([
    {
      user_access_id: uuidv4(),
      user_id,
      role_id: admin_role_id,
    },
    {
      user_access_id: uuidv4(),
      user_id,
      role_id: user_role_id,
    },
  ]);

  const loggedIn = await request(app).post('/api/v1/auth/login').send({
    email: 'example@co',
    password: '@Pass123',
  });

  return loggedIn.body.token;
};

module.exports = getUserToken;
