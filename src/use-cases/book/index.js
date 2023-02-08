const { bookRepository } = require('../../repositories');

const serviceFindAll = require('./findAll');

// register service
const findAll = serviceFindAll(bookRepository);

const bookService = {
  findAll,
};

module.exports = bookService;
