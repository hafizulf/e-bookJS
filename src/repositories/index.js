const database = require('../frameworks/database/knex');

const createBookRepository = require('./book.repository');

// register repository
const bookRepository = createBookRepository(database);

module.exports = {
  bookRepository
};
