const UserEntity = require('../../entities/user.entity');
const userRepository = require('../../repositories/user');

const userValidator = require('../../frameworks/validators/user');
const buildError = require('../../frameworks/utils/buildError');
const { hash } = require('../../frameworks/utils/hash');

const saveService = require('./save');

const save = saveService(
  UserEntity,
  userRepository,
  userValidator,
  hash,
  buildError
);

const userService = {
  save,
};

module.exports = userService;
