const bookService = require('../../use-cases/book');
const paginate = require('../../frameworks/utils/paginate');

// register controllers
const ctlFindAll = require('./findAll');
const ctlFindOne = require('./findOne');
const ctlSave = require('./save');
const ctlDeleteOne = require('./deleteOne');
const ctlUpdate = require('./update');

const findAll = ctlFindAll(bookService, paginate);
const findOne = ctlFindOne(bookService);
const save = ctlSave(bookService);
const deleteOne = ctlDeleteOne(bookService);
const update = ctlUpdate(bookService);

const bookController = {
  findAll,
  findOne,
  save,
  deleteOne,
  update,
};

module.exports = bookController;
