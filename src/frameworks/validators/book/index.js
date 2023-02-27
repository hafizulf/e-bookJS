const yup = require('yup');

// schema
const saveSchema = require('./save.schema');
const updateSchema = require('./update.schema');

// make rules
const saveRules = saveSchema(yup);
const updateRules = updateSchema(yup);

// register validator
const createBookValidator = require('../');

const save = createBookValidator(saveRules);
const update = createBookValidator(updateRules);

const bookValidator = {
  save,
  update,
};

module.exports = bookValidator;
