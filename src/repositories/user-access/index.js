const database = require('../../frameworks/database/knex');
const tableName = 'users_access';

const repositoryFindUserAccess = require('./findUserAccess');
const repositorySave = require('./save');
const repositoryCountAll = require('./countAll');
const repositoryFindAll = require('./findAll');
const repositoryFindOne = require('./findOne');
const repositoryDeleteOne = require('./deleteOne');

const findUserAccess = repositoryFindUserAccess(database, tableName);
const save = repositorySave(database, tableName);
const countAll = repositoryCountAll(database, tableName);
const findAll = repositoryFindAll(database, tableName);
const findOne = repositoryFindOne(database, tableName);
const deleteOne = repositoryDeleteOne(database, tableName);

const userAccessRepository = {
  findUserAccess,
  save,
  countAll,
  findAll,
  findOne,
  deleteOne,
};

module.exports = userAccessRepository;
