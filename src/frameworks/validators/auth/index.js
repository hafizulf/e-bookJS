const yup = require('yup');

const loginSchema = require('./login.schema');
const loginRules = loginSchema(yup);

const createLoginValidator = require('../');
const login = createLoginValidator(loginRules);

const authValidator = {
  login,
};

module.exports = authValidator;
