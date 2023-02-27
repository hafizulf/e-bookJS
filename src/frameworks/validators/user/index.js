const yup = require('yup');

// schema
const saveSchema = require('./save.schema');
const updateSchema = require('./update.schema');
const changePasswordSchema = require('./changePassword.schema');

// rules
const saveRules = saveSchema(yup);
const updateRules = updateSchema(yup);
const changePasswordRules = changePasswordSchema(yup);

// register user validator
const createUserValidator = require('../');

const save = createUserValidator(saveRules);
const update = createUserValidator(updateRules);
const changePassword = createUserValidator(changePasswordRules);

const userValidator = {
  save,
  update,
  changePassword,
};

module.exports = userValidator;
