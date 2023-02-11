const bookService = require('../../use-cases/book');

// register controllers
const ctlFindAll = require('./findAll');
const ctlSave = require('./save');

const findAll = ctlFindAll(bookService);
const save = ctlSave(bookService);

const bookController = {
  findAll,
  save,
};

module.exports = bookController;
