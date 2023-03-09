const RoleEntity = require('../../entities/role.entity');
const roleRepository = require('../../repositories/role');
const buildError = require('../../frameworks/utils/buildError');
const roleValidator = require('../../frameworks/validators/role');

const serviceSave = require('./save');

const save = serviceSave(RoleEntity, roleRepository, roleValidator, buildError);

const roleService = {
  save,
};

module.exports = roleService;
