const userService = require('../../use-cases/user');
const paginate = require('../../frameworks/utils/paginate');

const ctlSave = require('./save');
const ctlFindAll = require('./findAll');
const ctlFindOne = require('./findOne');

const save = ctlSave(userService);
const findAll = ctlFindAll(userService, paginate);
const findOne = ctlFindOne(userService);

const userController = {
  save,
  findAll,
  findOne,
};

module.exports = userController;
