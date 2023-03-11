const bookService = require('../../use-cases/book');
const path = require('path');

// register controllers
const ctlFindAll = require('./findAll');
const ctlFindOne = require('./findOne');
const ctlSave = require('./save');
const ctlDeleteOne = require('./deleteOne');
const ctlUpdate = require('./update');
const ctlDownloadFile = require('./downloadFile');

const findAll = ctlFindAll(bookService);
const findOne = ctlFindOne(bookService);
const save = ctlSave(bookService);
const deleteOne = ctlDeleteOne(bookService);
const update = ctlUpdate(bookService);
const downloadFile = ctlDownloadFile(path);

const bookController = {
  findAll,
  findOne,
  save,
  deleteOne,
  update,
  downloadFile,
};

module.exports = bookController;
