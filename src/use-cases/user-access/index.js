const UserAccessEntity = require('../../entities/userAccess.entity');
const userRepository = require('../../repositories/user');
const roleRepository = require('../../repositories/role');
const userAccessRepository = require('../../repositories/user-access');

const userAccessValidator = require('../../frameworks/validators/user-access');
const buildError = require('../../frameworks/utils/buildError');
const paginate = require('../../frameworks/utils/paginate');

const serviceSave = require('./save');
const serviceFindAll = require('./findAll');
const serviceDeleteOne = require('./deleteOne');

const save = serviceSave(
  UserAccessEntity,
  userRepository,
  roleRepository,
  userAccessRepository,
  userAccessValidator,
  buildError
);
const findAll = serviceFindAll(userAccessRepository, paginate);
const deleteOne = serviceDeleteOne(userAccessRepository);

const roleService = {
  save,
  findAll,
  deleteOne,
};

module.exports = roleService;
