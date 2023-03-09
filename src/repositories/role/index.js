const database = require('../../frameworks/database/knex');
const tableName = 'roles';

const repositorySave = require('./save');
const repositoryFindAll = require('./findAll');
const repositoryFindOne = require('./findOne');

const save = repositorySave(database, tableName);
const findAll = repositoryFindAll(database, tableName);
const findOne = repositoryFindOne(database, tableName);

const roleRepository = {
  save,
  findAll,
  findOne,
};

module.exports = roleRepository;
