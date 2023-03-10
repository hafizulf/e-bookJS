const database = require('../../frameworks/database/knex');
const tableName = 'users_access';

const repositoryFindUserAccess = require('./findUserAccess');
const repositorySave = require('./save');

const findUserAccess = repositoryFindUserAccess(database, tableName);
const save = repositorySave(database, tableName);

const userAccessRepository = {
  findUserAccess,
  save,
};

module.exports = userAccessRepository;
