const serviceChangePassword = (
  Entity,
  repository,
  validator,
  hasher,
  buildError
) => {
  return async (data) => {
    try {
      validator.changePassword(data);

      const { user_id, userOldPassword, oldPassword } = data;
      let { password } = data;

      if (password === oldPassword) {
        return {
          status: false,
          errors: {
            password: ['New password cannot be same with old password'],
          },
        };
      }

      const isMatched = hasher.compare(oldPassword, userOldPassword);
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

      return { status: true };
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
