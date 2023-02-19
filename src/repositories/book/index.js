const database = require('../../frameworks/database/knex');

const tableName = 'books';

// register repository
const repositoryFindAll = require('./findAll');
const repositorySave = require('./save');
const repositoryFindOne = require('./findOne');
const repositoryDeleteOne = require('./deleteOne');
const repositoryUpdate = require('./update');
const repositoryCountAll = require('./countAll');

const findAll = repositoryFindAll(database, tableName);
const save = repositorySave(database, tableName);
const findOne = repositoryFindOne(database, tableName);
const deleteOne = repositoryDeleteOne(database, tableName);
const update = repositoryUpdate(database, tableName);
const countAll = repositoryCountAll(database, tableName);

const bookRepository = {
  findAll,
  save,
  findOne,
  deleteOne,
  update,
  countAll,
};

module.exports = bookRepository;
