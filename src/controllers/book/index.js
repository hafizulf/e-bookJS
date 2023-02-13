const bookService = require('../../use-cases/book');

// register controllers
const ctlFind = require('./find');
const ctlSave = require('./save');
const ctlDelete = require('./deleteOne');

const find = ctlFind(bookService);
const save = ctlSave(bookService);
const deleteOne = ctlDelete(bookService);

const bookController = {
  find,
  save,
  deleteOne,
};

module.exports = bookController;
