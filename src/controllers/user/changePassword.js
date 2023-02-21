const ctlChangePassword = (service) => {
  return async (req, res) => {
    const { user_id } = req.params;
    const user = await service.findOne({ name: 'user_id', value: user_id });

    if (user === undefined) {
      return res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        message: 'User Not Found',
      });
    } else {
      const { oldPassword, password, passwordConfirmation } = req.body;
      const data = {
        user_id,
        userOldPassword: user.password,
        oldPassword,
        password,
        passwordConfirmation,
      };

      const result = await service.changePassword(data);

      if (result.status) {
        res.status(200).json({
          status: 'OK',
          code: 200,
          message: 'Password has been updated',
        });
      } else {
        res.status(400).json({
          status: 'BAD_REQUEST',
          code: 400,
          errors: result.errors,
        });
      }
    }
  };
};

module.exports = ctlChangePassword;
