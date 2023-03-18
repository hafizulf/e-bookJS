const jwt = require('../utils/jsonWebToken');

const isLoggedIn = (req, res, next) => {
  const bearer = req.headers.authorization;

  const unauthorizedResponse = {
    status: 'Unauthorized',
    code: 401,
  };

  if (!bearer) {
    unauthorizedResponse.message = 'Token is not provided!';
    return res.status(401).json(unauthorizedResponse);
  }

  const token = bearer.split(' ')[1];

  const isVerify = jwt.verifyToken(token);
  if (!isVerify) {
    unauthorizedResponse.message = 'Token is not valid!';
    return res.status(401).json(unauthorizedResponse);
  }

  req.user_id = isVerify.user_id;
  next();
};

module.exports = isLoggedIn;
