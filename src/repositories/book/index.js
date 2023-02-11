const database = require('../../frameworks/database/knex');

const tableName = 'books';

// register repository
const repositoryFindAll = require('./findAll');
const repositorySave = require('./save');

const findAll = repositoryFindAll(database, tableName);
const save = repositorySave(database, tableName);

const bookRepository = {
  findAll,
  save,
};

module.exports = bookRepository;
