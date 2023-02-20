const userRepository = require('../../repositories/user');

const saveService = require('./save');

const save = saveService(userRepository);

const userService = {
  save,
};

module.exports = userService;
