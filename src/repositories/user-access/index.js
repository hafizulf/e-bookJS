const database = require('../../frameworks/database/knex');
const tableName = 'users_access';

const repositoryFindUserAccess = require('./findUserAccess');
const repositorySave = require('./save');
const repositoryCountAll = require('./countAll');
const repositoryFindAll = require('./findAll');

const findUserAccess = repositoryFindUserAccess(database, tableName);
const save = repositorySave(database, tableName);
const countAll = repositoryCountAll(database, tableName);
const findAll = repositoryFindAll(database, tableName);

const userAccessRepository = {
  findUserAccess,
  save,
  countAll,
  findAll,
};

module.exports = userAccessRepository;
