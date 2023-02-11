const yup = require('yup');

const bookSchema = require('./schema');
const createBookValidator = require('./validator');

const bookRules = bookSchema(yup);
const bookValidator = createBookValidator(bookRules);

module.exports = bookValidator;
