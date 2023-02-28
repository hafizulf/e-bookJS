const { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');
const cache = require('../../src/frameworks/middleware/cache');
const { compare } = require('../../src/frameworks/utils/hasher');
const getUserToken = require('../auth/getUserToken');
const mockData = require('../__mock__/user/data');
const mockResponse = require('../__mock__/user/response');

const params = {
  request,
  expect,
  app,
  database,
  cache,
  compare,
  getUserToken,
  mockData,
  mockResponse,
};

const findAllSpecs = require('./api.getFindAll.spec');
const findOneSpecs = require('./api.getFindOne.spec');
const saveSpecs = require('./api.postSave.spec');
const updateSpecs = require('./api.update.spec');
const deleteSpecs = require('./api.deleteOne.spec');
const changePasswordSpecs = require('./api.changePassword.spec');

findAllSpecs(params);
findOneSpecs(params);
saveSpecs(params);
deleteSpecs(params);
updateSpecs(params);
changePasswordSpecs(params);
