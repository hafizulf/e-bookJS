const database = require('../../frameworks/database/knex');
const tableName = 'users';

const repositorySave = require('./save');
const repositoryCountAll = require('./countAll');
const repositoryFindAll = require('./findAll');
const repositoryFindOne = require('./findOne');
const repositoryDeleteOne = require('./deleteOne');
const repositoryUpdate = require('./update');
const repositoryChangePassword = require('./changePassword');

const save = repositorySave(database, tableName);
const countAll = repositoryCountAll(database, tableName);
const findAll = repositoryFindAll(database, tableName);
const findOne = repositoryFindOne(database, tableName);
const deleteOne = repositoryDeleteOne(database, tableName);
const update = repositoryUpdate(database, tableName);
const changePassword = repositoryChangePassword(database, tableName);

const userRepository = {
  save,
  countAll,
  findAll,
  findOne,
  deleteOne,
  update,
  changePassword,
};

module.exports = userRepository;
