const BookEntity = require('../../entities/book.entity');
const bookRepository = require('../../repositories/book');

// Schema Validation
const buildError = require('../../frameworks/utils/buildError');
const bookValidator = require('../../frameworks/validators/book');

const fileRemover = require('../../frameworks/utils/fileRemover');
const paginate = require('../../frameworks/utils/paginate');

// register services
const serviceFindAll = require('./findAll');
const serviceSave = require('./save');
const serviceFindOne = require('./findOne');
const serviceDeleteOne = require('./deleteOne');
const serviceUpdate = require('./update');

const findAll = serviceFindAll(bookRepository, paginate);
const save = serviceSave(BookEntity, bookRepository, bookValidator, buildError);
const findOne = serviceFindOne(bookRepository);
const deleteOne = serviceDeleteOne(bookRepository, fileRemover);
const update = serviceUpdate(
  BookEntity,
  bookRepository,
  bookValidator,
  buildError,
  fileRemover
);

const bookService = {
  findAll,
  save,
  findOne,
  deleteOne,
  update,
};

module.exports = bookService;
