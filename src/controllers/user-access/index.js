const userAccessService = require('../../use-cases/user-access');

const ctlSave = require('./save');

const save = ctlSave(userAccessService);

const roleController = {
  save,
};

module.exports = roleController;
