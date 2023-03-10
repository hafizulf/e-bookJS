const RoleEntity = require('../../entities/role.entity');
const roleRepository = require('../../repositories/role');
const buildError = require('../../frameworks/utils/buildError');
const roleValidator = require('../../frameworks/validators/role');

const serviceSave = require('./save');
const serviceFindAll = require('./findAll');
const serviceFindOne = require('./findOne');
const serviceDeleteOne = require('./deleteOne');
const serviceUpdate = require('./update');

const save = serviceSave(RoleEntity, roleRepository, roleValidator, buildError);
const findAll = serviceFindAll(roleRepository);
const findOne = serviceFindOne(roleRepository);
const deleteOne = serviceDeleteOne(roleRepository);
const update = serviceUpdate(
  RoleEntity,
  roleRepository,
  roleValidator,
  buildError
);

const roleService = {
  save,
  findAll,
  findOne,
  deleteOne,
  update,
};

module.exports = roleService;
