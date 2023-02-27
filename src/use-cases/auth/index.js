const userRepository = require('../../repositories/user');

const authValidator = require('../../frameworks/validators/auth');
const jwt = require('../../frameworks/utils/jsonWebToken');
const hasher = require('../../frameworks/utils/hasher');
const buildError = require('../../frameworks/utils/buildError');

const serviceLogin = require('./login');

const login = serviceLogin(
  userRepository,
  authValidator,
  jwt,
  hasher,
  buildError
);

const authService = { login };

module.exports = authService;
