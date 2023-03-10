const database = require('../../frameworks/database/knex');
const tableName = 'roles';

const repositorySave = require('./save');
const repositoryFindAll = require('./findAll');
const repositoryFindOne = require('./findOne');
const repositoryDeleteOne = require('./deleteOne');
const repositoryUpdate = require('./update');

const save = repositorySave(database, tableName);
const findAll = repositoryFindAll(database, tableName);
const findOne = repositoryFindOne(database, tableName);
const deleteOne = repositoryDeleteOne(database, tableName);
const update = repositoryUpdate(database, tableName);

const roleRepository = {
  save,
  findAll,
  findOne,
  deleteOne,
  update,
};

module.exports = roleRepository;
