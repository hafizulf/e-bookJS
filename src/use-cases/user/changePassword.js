const serviceChangePassword = (validator, buildError) => {
  return async (data) => {
    try {
      validator.changePassword(data);
      // const { user_id, oldPassword, password, passwordConfirmation } = data;
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
