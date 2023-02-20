const userRepository = require('../../repositories/user');

const buildError = require('../../frameworks/utils/buildError');
const userValidator = require('../../frameworks/validators/user');

const saveService = require('./save');

const save = saveService(buildError, userValidator, userRepository);

const userService = {
  save,
};

module.exports = userService;
