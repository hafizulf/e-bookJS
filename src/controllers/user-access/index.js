const userAccessService = require('../../use-cases/user-access');

const ctlSave = require('./save');
const ctlFindAll = require('./findAll');
const ctlDeleteOne = require('./deleteOne');

const save = ctlSave(userAccessService);
const findAll = ctlFindAll(userAccessService);
const deleteOne = ctlDeleteOne(userAccessService);

const roleController = {
  save,
  findAll,
  deleteOne,
};

module.exports = roleController;
