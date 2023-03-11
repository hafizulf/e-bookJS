const userAccessService = require('../../use-cases/user-access');
const response = require('../../frameworks/utils/response');

const ctlSave = require('./save');
const ctlFindAll = require('./findAll');
const ctlDeleteOne = require('./deleteOne');

const save = ctlSave(userAccessService, response);
const findAll = ctlFindAll(userAccessService, response);
const deleteOne = ctlDeleteOne(userAccessService, response);

const roleController = {
  save,
  findAll,
  deleteOne,
};

module.exports = roleController;
