const bookService = require('../../use-cases/book');
const response = require('../../frameworks/utils/response');
const path = require('path');

const ctlFindAll = require('./findAll');
const ctlFindOne = require('./findOne');
const ctlSave = require('./save');
const ctlDeleteOne = require('./deleteOne');
const ctlUpdate = require('./update');
const ctlDownloadFile = require('./downloadFile');

const findAll = ctlFindAll(bookService, response);
const findOne = ctlFindOne(bookService, response);
const save = ctlSave(bookService, response);
const deleteOne = ctlDeleteOne(bookService, response);
const update = ctlUpdate(bookService, response);
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
