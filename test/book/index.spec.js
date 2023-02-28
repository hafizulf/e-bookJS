const request = require('supertest');
const { expect } = require('chai');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');
const cache = require('../../src/frameworks/middleware/cache');
const mockData = require('../__mock__/book/data');
const mockResponse = require('../__mock__/book/response');
const getUserToken = require('../auth/getUserToken');

const params = {
  request,
  expect,
  app,
  database,
  getUserToken,
  cache,
  mockData,
  mockResponse,
};

const findAllSpecs = require('./api.getFindAll.spec');
const findOneSpecs = require('./api.getFindOne.spec');
const saveSpecs = require('./api.postSave.spec');
const deleteSpecs = require('./api.deleteOne.spec');
const updateSpecs = require('./api.update.spec');

findAllSpecs(params);
findOneSpecs(params);
saveSpecs(params);
deleteSpecs(params);
updateSpecs(params);
