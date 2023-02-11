const yup = require('yup');

const bookSchema = require('./books');

const bookSchemaRules = bookSchema(yup);

module.exports = {
  bookSchemaRules,
};
