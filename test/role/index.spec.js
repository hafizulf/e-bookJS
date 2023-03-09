const request = require('supertest');
const { expect } = require('chai');

const app = require('../../src/frameworks/webserver/app');
const getUserToken = require('../auth/getUserToken');

const params = {
  request,
  expect,
  app,
  getUserToken,
};

const saveSpecs = require('./api.postSave.spec');
const findAllSpecs = require('./api.getFindAll.spec');
const findOneSpecs = require('./api.getFindOne.spec');

saveSpecs(params);
findAllSpecs(params);
findOneSpecs(params);
