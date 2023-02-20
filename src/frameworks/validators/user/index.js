const yup = require('yup');

// schema
const saveSchema = require('./save.schema');
const updateSchema = require('./update.schema');

// rules
const saveRules = saveSchema(yup);
const updateRules = updateSchema(yup);

// register user validator
const createUserValidator = require('./validator');

const save = createUserValidator(saveRules);
const update = createUserValidator(updateRules);

const userValidator = {
  save,
  update,
};

module.exports = userValidator;
