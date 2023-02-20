const userService = require('../../use-cases/user');

const saveCtl = require('./save');

const save = saveCtl(userService);

const userController = {
  save,
};

module.exports = userController;
