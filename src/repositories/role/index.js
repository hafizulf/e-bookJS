const database = require('../../frameworks/database/knex');
const tableName = 'roles';

const repositorySave = require('./save');
const repositoryFindAll = require('./findAll');

const save = repositorySave(database, tableName);
const findAll = repositoryFindAll(database, tableName);

const roleRepository = {
  save,
  findAll,
};

module.exports = roleRepository;
