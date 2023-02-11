const BookEntity = require('../../entities/book.entity');
const { bookRepository } = require('../../repositories');

// Schema Validation
const { bookSchemaRules } = require('../../frameworks/validators');
const buildError = require('../../frameworks/utils/buildError');

const serviceFindAll = require('./findAll');
const serviceSave = require('./save');

// register service
const findAll = serviceFindAll(bookRepository);
const save = serviceSave(
  BookEntity,
  bookSchemaRules,
  buildError,
  bookRepository
);

const bookService = {
  findAll,
  save,
};

module.exports = bookService;
