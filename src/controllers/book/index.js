const bookService = require('../../use-cases/book');
const paginate = require('../../frameworks/utils/paginate');

// register controllers
const ctlFind = require('./find');
const ctlSave = require('./save');
const ctlDeleteOne = require('./deleteOne');
const ctlUpdate = require('./update');

const find = ctlFind(bookService, paginate);
const save = ctlSave(bookService);
const deleteOne = ctlDeleteOne(bookService);
const update = ctlUpdate(bookService);

const bookController = {
  find,
  save,
  deleteOne,
  update,
};

module.exports = bookController;
