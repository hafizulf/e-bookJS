const authService = require('../../use-cases/auth');
const userService = require('../../use-cases/user');
const response = require('../../frameworks/utils/response');

const ctlLogin = require('./login');
const ctlRegister = require('./register');

const login = ctlLogin(authService, response);
const register = ctlRegister(userService, response);

const authController = {
  login,
  register,
};

module.exports = authController;
