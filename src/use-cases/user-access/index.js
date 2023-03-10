const UserAccessEntity = require('../../entities/userAccess.entity');
const userRepository = require('../../repositories/user');
const roleRepository = require('../../repositories/role');
const userAccessRepository = require('../../repositories/user-access');
const userAccessValidator = require('../../frameworks/validators/user-access');
const buildError = require('../../frameworks/utils/buildError');

const serviceSave = require('./save');

const save = serviceSave(
  UserAccessEntity,
  userRepository,
  roleRepository,
  userAccessRepository,
  userAccessValidator,
  buildError
);

const roleService = {
  save,
};

module.exports = roleService;
