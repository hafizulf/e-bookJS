const config = require('../config/auth');
const jwt = require('jsonwebtoken');

const getToken = (user_id) => {
  return jwt.sign({ user_id }, config.JWT_SECRET_KEY, {
    expiresIn: '1d',
  });
};

module.exports = {
  getToken,
};
