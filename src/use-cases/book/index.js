const Book = require('../../entities/book.entity');
const { bookRepository } = require('../../repositories');

const serviceFindAll = require('./findAll');
const serviceSave = require('./save');

// register service
const findAll = serviceFindAll(bookRepository);
const save = serviceSave(bookRepository, Book);

const bookService = {
  findAll,
  save,
};

module.exports = bookService;
