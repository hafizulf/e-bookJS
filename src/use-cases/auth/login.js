const serviceLogin = (repository, validator, jwt, hasher, buildError) => {
  return async (data) => {
    try {
      validator.login(data);

      // check if user is exist
      const { email } = data;

      const user = await repository.findOne({
        name: 'email',
        value: email,
      });

      if (!user) {
        return {
          status: false,
          message: 'User Not Found',
        };
      }

      // user exists, check if password is correct
      const isVerify = hasher.compare(data.password, user.password);
      if (!isVerify) {
        return {
          status: false,
          type: 'unauthorized',
          message: 'Invalid Password',
        };
      }

      // Get Token
      const token = jwt.getToken(user.user_id);

      return {
        status: true,
        token,
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

module.exports = serviceLogin;
