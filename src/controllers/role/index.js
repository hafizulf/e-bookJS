const roleService = require('../../use-cases/role');
const response = require('../../frameworks/utils/response');

const ctlSave = require('./save');
const ctlFindAll = require('./findAll');
const ctlFindOne = require('./findOne');
const ctlDeleteOne = require('./deleteOne');
const ctlUpdate = require('./update');

const save = ctlSave(roleService, response);
const findAll = ctlFindAll(roleService, response);
const findOne = ctlFindOne(roleService, response);
const deleteOne = ctlDeleteOne(roleService, response);
const update = ctlUpdate(roleService, response);

const roleController = {
  save,
  findAll,
  findOne,
  deleteOne,
  update,
};

module.exports = roleController;
