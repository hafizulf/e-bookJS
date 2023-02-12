const bookService = require('../../use-cases/book');

// register controllers
const ctlFind = require('./find');
const ctlSave = require('./save');

const find = ctlFind(bookService);
const save = ctlSave(bookService);

const bookController = {
  find,
  save,
};

module.exports = bookController;
