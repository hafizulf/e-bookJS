const authService = require('../../use-cases/auth');
const userService = require('../../use-cases/user');

const ctlLogin = require('./login');
const ctlRegister = require('./register');

const login = ctlLogin(authService);
const register = ctlRegister(userService);

const authController = {
  login,
  register,
};

module.exports = authController;
