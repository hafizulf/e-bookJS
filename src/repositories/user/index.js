const database = require('../../frameworks/database/knex');

const tableName = 'users';

const saveRepository = require('./save');

const save = saveRepository(database, tableName);

const userRepository = {
  save,
};

module.exports = userRepository;
