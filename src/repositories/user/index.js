const database = require('../../frameworks/database/knex');
const tableName = 'users';

const repositorySave = require('./save');
const repositoryCountAll = require('./countAll');
const repositoryFindAll = require('./findAll');

const save = repositorySave(database, tableName);
const countAll = repositoryCountAll(database, tableName);
const findAll = repositoryFindAll(database, tableName);

const userRepository = {
  save,
  countAll,
  findAll,
};

module.exports = userRepository;
