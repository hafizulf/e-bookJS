const userAccessService = require('../../use-cases/user-access');

const ctlSave = require('./save');
const ctlFindAll = require('./findAll');

const save = ctlSave(userAccessService);
const findAll = ctlFindAll(userAccessService);

const roleController = {
  save,
  findAll,
};

module.exports = roleController;
