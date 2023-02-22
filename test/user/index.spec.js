const { expect } = require('chai');
const request = require('supertest');

const app = require('../../src/frameworks/webserver/app');
const database = require('../../src/frameworks/database/knex');
const cache = require('../../src/frameworks/middleware/cache');
const { compare } = require('../../src/frameworks/utils/hasher');

const mockData = require('../__mock__/user/data');
const mockResponse = require('../__mock__/user/response');

const findAllSpecs = require('./api.getFindAll.spec');
const findOneSpecs = require('./api.getFindOne.spec');
const saveSpecs = require('./api.postSave.spec');
const updateSpecs = require('./api.update.spec');
const deleteSpecs = require('./api.deleteOne.spec');
const changePasswordSpecs = require('./api.changePassword.spec');

findAllSpecs(expect, request, app, database, cache, mockData, mockResponse);
findOneSpecs(expect, request, app, database, mockData, mockResponse);
saveSpecs(expect, request, app, database, compare, mockData, mockResponse);
deleteSpecs(expect, request, app, database, mockData, mockResponse);
updateSpecs(expect, request, app, database, mockData, mockResponse);
changePasswordSpecs(expect, request, app, database, compare, mockData);
