const roleService = require('../../use-cases/role');

const ctlSave = require('./save');

const save = ctlSave(roleService);

const roleController = {
  save,
};

module.exports = roleController;
