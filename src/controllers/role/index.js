const roleService = require('../../use-cases/role');

const ctlSave = require('./save');
const ctlFindAll = require('./findAll');
const ctlFindOne = require('./findOne');

const save = ctlSave(roleService);
const findAll = ctlFindAll(roleService);
const findOne = ctlFindOne(roleService);

const roleController = {
  save,
  findAll,
  findOne,
};

module.exports = roleController;
