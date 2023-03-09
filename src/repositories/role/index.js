const database = require('../../frameworks/database/knex');
const tableName = 'roles';

const repositorySave = require('./save');

const save = repositorySave(database, tableName);

const roleRepository = {
  save,
};

module.exports = roleRepository;
