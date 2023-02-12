const database = require('../../frameworks/database/knex');

const tableName = 'books';

// register repository
const repositoryFindAll = require('./findAll');
const repositorySave = require('./save');
const repositoryFindOne = require('./findOne');

const findAll = repositoryFindAll(database, tableName);
const save = repositorySave(database, tableName);
const findOne = repositoryFindOne(database, tableName);

const bookRepository = {
  findAll,
  save,
  findOne,
};

module.exports = bookRepository;
