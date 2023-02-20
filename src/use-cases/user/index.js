const UserEntity = require('../../entities/user.entitiy');
const userRepository = require('../../repositories/user');

const buildError = require('../../frameworks/utils/buildError');
const userValidator = require('../../frameworks/validators/user');

const saveService = require('./save');

const save = saveService(UserEntity, userRepository, userValidator, buildError);

const userService = {
  save,
};

module.exports = userService;
