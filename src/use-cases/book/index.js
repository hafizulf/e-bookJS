const BookEntity = require('../../entities/book.entity');
const bookRepository = require('../../repositories/book');

// Schema Validation
const buildError = require('../../frameworks/utils/buildError');
const bookValidator = require('../../frameworks/validators/book');

// register services
const serviceFindAll = require('./findAll');
const serviceSave = require('./save');

const findAll = serviceFindAll(bookRepository);
const save = serviceSave(BookEntity, bookRepository, bookValidator, buildError);

const bookService = {
  findAll,
  save,
};

module.exports = bookService;
