require('dotenv').config();

module.exports = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'ebookjs_secret',
  JWT_EXP_DATE: process.env.JWT_EXP_DATE || '1d',
};
