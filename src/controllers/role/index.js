const roleService = require('../../use-cases/role');

const ctlSave = require('./save');
const ctlFindAll = require('./findAll');

const save = ctlSave(roleService);
const findAll = ctlFindAll(roleService);

const roleController = {
  save,
  findAll,
};

module.exports = roleController;
