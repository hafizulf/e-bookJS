const yup = require('yup');
const saveSchema = require('./save.schema');
const saveRules = saveSchema(yup);

const createRoleValidator = require('../');
const save = createRoleValidator(saveRules);

const roleValidator = {
  save,
};

module.exports = roleValidator;
