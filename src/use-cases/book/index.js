const BookEntity = require('../../entities/book.entity');
const { bookRepository } = require('../../repositories');

// Schema Validation
const buildError = require('../../frameworks/utils/buildError');
const bookValidator = require('../../frameworks/validators/book');

const serviceFindAll = require('./findAll');
const serviceSave = require('./save');

// register service
const findAll = serviceFindAll(bookRepository);
const save = serviceSave(BookEntity, bookValidator, buildError, bookRepository);

const bookService = {
  findAll,
  save,
};

module.exports = bookService;
