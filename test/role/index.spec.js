const request = require('supertest');
const { expect } = require('chai');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');
const getUserToken = require('../auth/getUserToken');

const params = {
  request,
  expect,
  app,
  database,
  getUserToken,
};

const saveSpecs = require('./api.postSave.spec');
const findAllSpecs = require('./api.getFindAll.spec');
const findOneSpecs = require('./api.getFindOne.spec');
const deleteOneSpecs = require('./api.deleteOne.spec.js');

saveSpecs(params);
findAllSpecs(params);
findOneSpecs(params);
deleteOneSpecs(params);
