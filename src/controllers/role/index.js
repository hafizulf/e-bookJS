const roleService = require('../../use-cases/role');

const ctlSave = require('./save');
const ctlFindAll = require('./findAll');
const ctlFindOne = require('./findOne');
const ctlDeleteOne = require('./deleteOne');
const ctlUpdate = require('./update');

const save = ctlSave(roleService);
const findAll = ctlFindAll(roleService);
const findOne = ctlFindOne(roleService);
const deleteOne = ctlDeleteOne(roleService);
const update = ctlUpdate(roleService);

const roleController = {
  save,
  findAll,
  findOne,
  deleteOne,
  update,
};

module.exports = roleController;
