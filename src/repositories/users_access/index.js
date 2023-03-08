const database = require('../../frameworks/database/knex');
const tableName = 'users_access';

const repositoryGetUserAccess = require('./getUserAccess');

const getUserAccess = repositoryGetUserAccess(database, tableName);

const roleRepository = {
  getUserAccess,
};

module.exports = roleRepository;
