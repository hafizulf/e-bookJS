const serviceChangePassword = (
  Entity,
  repository,
  validator,
  hasher,
  buildError
) => {
  return async (data) => {
    try {
      const { user_id } = data;
      const userData = await repository.findOne({
        name: 'user_id',
        value: user_id,
      });

      if (!userData) {
        return {
          status: false,
          message: 'User Not Found',
        };
      }

      const { oldPassword } = data;
      let { password } = data;

      validator.changePassword(data);

      if (password === oldPassword) {
        return {
          status: false,
          errors: {
            password: ['New password cannot be same with old password'],
          },
        };
      }

      const isMatched = hasher.compare(oldPassword, userData.password);
      if (!isMatched) {
        return {
          status: false,
          errors: {
            oldPassword: ['Wrong old password'],
          },
        };
      }

      password = hasher.hash(password);
      const user = new Entity({ user_id, password });
      const newPassword = user.changePassword();

      await repository.changePassword(newPassword);

      return {
        status: true,
        message: 'Password has been updated',
      };
    } catch (err) {
      const errors = buildError(err.inner);
      return {
        status: false,
        errors,
      };
    }
  };
};

module.exports = serviceChangePassword;
