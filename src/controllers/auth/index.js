const authService = require('../../use-cases/auth');

const ctlLogin = require('./login');

const login = ctlLogin(authService);

const authController = { login };

module.exports = authController;
