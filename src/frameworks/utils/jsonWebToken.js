const config = require('../config/auth');
const jwt = require('jsonwebtoken');

const getToken = (user_id) => {
  return jwt.sign({ user_id }, config.JWT_SECRET_KEY, {
    expiresIn: config.JWT_EXP_DATE,
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, config.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return false;
    }
    return decoded;
  });
};

module.exports = {
  getToken,
  verifyToken,
};
