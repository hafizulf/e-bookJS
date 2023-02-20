const yup = require('yup');

// schema
const saveSchema = require('./save.schema');

// rules
const saveRules = saveSchema(yup);

// register user validator
const createUserValidator = require('./validator');

const save = createUserValidator(saveRules);

const userValidator = { save };

module.exports = userValidator;
