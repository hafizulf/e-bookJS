const yup = require('yup');

const saveSchema = require('./save.schema');
const updateSchema = require('./update.schema');

const saveRules = saveSchema(yup);
const updateRules = updateSchema(yup);

const createRoleValidator = require('../');

const save = createRoleValidator(saveRules);
const update = createRoleValidator(updateRules);

const roleValidator = {
  save,
  update,
};

module.exports = roleValidator;
