const { expect } = require('chai');
const request = require('supertest');
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
const findAllSpecs = require('./api.findAll.spec');
const deleteOneSpecs = require('./api.deleteOne.spec');

saveSpecs(params);
findAllSpecs(params);
deleteOneSpecs(params);
