const userService = require('../../use-cases/user');

const ctlSave = require('./save');
const ctlFindAll = require('./findAll');
const ctlFindOne = require('./findOne');
const ctlDeleteOne = require('./deleteOne');
const ctlUpdate = require('./update');
const ctlChangePassword = require('./changePassword');

const save = ctlSave(userService);
const findAll = ctlFindAll(userService);
const findOne = ctlFindOne(userService);
const deleteOne = ctlDeleteOne(userService);
const update = ctlUpdate(userService);
const changePassword = ctlChangePassword(userService);

const userController = {
  save,
  findAll,
  findOne,
  deleteOne,
  update,
  changePassword,
};

module.exports = userController;
