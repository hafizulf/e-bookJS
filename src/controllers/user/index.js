const userService = require('../../use-cases/user');
const response = require('../../frameworks/utils/response');

const ctlSave = require('./save');
const ctlFindAll = require('./findAll');
const ctlFindOne = require('./findOne');
const ctlDeleteOne = require('./deleteOne');
const ctlUpdate = require('./update');
const ctlChangePassword = require('./changePassword');

const save = ctlSave(userService, response);
const findAll = ctlFindAll(userService, response);
const findOne = ctlFindOne(userService, response);
const deleteOne = ctlDeleteOne(userService, response);
const update = ctlUpdate(userService, response);
const changePassword = ctlChangePassword(userService, response);

const userController = {
  save,
  findAll,
  findOne,
  deleteOne,
  update,
  changePassword,
};

module.exports = userController;
