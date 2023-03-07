const jwt = require('../utils/jsonWebToken');

const isLoggedIn = (req, res, next) => {
  const token = req.headers['x-auth-token'];

  const unauthorizedResponse = {
    status: 'Unauthorized',
    code: 401,
  };

  if (!token) {
    unauthorizedResponse.message = 'Token is not provided!';
    return res.status(401).json(unauthorizedResponse);
  }

  const isVerify = jwt.verifyToken(token);
  if (!isVerify) {
    unauthorizedResponse.message = 'Token is not valid!';
    return res.status(401).json(unauthorizedResponse);
  }

  req.user_id = isVerify.user_id;
  next();
};

module.exports = isLoggedIn;
