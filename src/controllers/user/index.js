const userService = require('../../use-cases/user');
const paginate = require('../../frameworks/utils/paginate');

const ctlSave = require('./save');
const ctlFindAll = require('./findAll');

const save = ctlSave(userService);
const findAll = ctlFindAll(userService, paginate);

const userController = {
  save,
  findAll,
};

module.exports = userController;
