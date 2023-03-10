const { findUserAccess } = require('../../repositories/user-access');

const authorize = (role) => {
  return async (req, res, next) => {
    const { user_id } = req;
    const user_access = await findUserAccess(user_id);
    let user_roles = user_access.map((user) => user.role);

    const hasAccess = user_roles.includes(role) ? true : false;

    if (!hasAccess) {
      return res.status(403).json({
        status: 'Forbidden',
        code: 403,
        message: "You don't have permission!",
      });
    }

    next();
  };
};

module.exports = authorize;
