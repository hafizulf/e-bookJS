const RoleEntity = require('../../entities/role.entity');
const roleRepository = require('../../repositories/role');
const buildError = require('../../frameworks/utils/buildError');
const roleValidator = require('../../frameworks/validators/role');

const serviceSave = require('./save');
const serviceFindAll = require('./findAll');
const serviceFindOne = require('./findOne');

const save = serviceSave(RoleEntity, roleRepository, roleValidator, buildError);
const findAll = serviceFindAll(roleRepository);
const findOne = serviceFindOne(roleRepository);

const roleService = {
  save,
  findAll,
  findOne,
};

module.exports = roleService;
