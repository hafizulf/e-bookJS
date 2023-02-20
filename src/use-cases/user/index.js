const UserEntity = require('../../entities/user.entity');
const userRepository = require('../../repositories/user');

const userValidator = require('../../frameworks/validators/user');
const buildError = require('../../frameworks/utils/buildError');
const { hash } = require('../../frameworks/utils/hash');

const serviceSave = require('./save');
const serviceCountAll = require('./countAll');
const serviceFindAll = require('./findAll');
const serviceFindOne = require('./findOne');
const serviceDeleteOne = require('./deleteOne');

const save = serviceSave(
  UserEntity,
  userRepository,
  userValidator,
  hash,
  buildError
);

const countAll = serviceCountAll(userRepository);
const findAll = serviceFindAll(userRepository);
const findOne = serviceFindOne(userRepository);
const deleteOne = serviceDeleteOne(userRepository);

const userService = {
  save,
  countAll,
  findAll,
  findOne,
  deleteOne,
};

module.exports = userService;
