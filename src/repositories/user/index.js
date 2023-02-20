const database = require('../../frameworks/database/knex');
const tableName = 'users';

const repositorySave = require('./save');
const repositoryCountAll = require('./countAll');
const repositoryFindAll = require('./findAll');
const repositoryFindOne = require('./findOne');

const save = repositorySave(database, tableName);
const countAll = repositoryCountAll(database, tableName);
const findAll = repositoryFindAll(database, tableName);
const findOne = repositoryFindOne(database, tableName);

const userRepository = {
  save,
  countAll,
  findAll,
  findOne,
};

module.exports = userRepository;
