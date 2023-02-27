const serviceLogin = (repository, validator, jwt, hasher, buildError) => {
  return async (data) => {
    try {
      validator.login(data);

      // check if user is exist
      const { username, email } = data;
      const find = {
        name: username ? 'username' : 'email',
        value: username ? username : email,
      };

      const user = await repository.findOne({
        name: find.name,
        value: find.value,
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
        message: 'User has been logged in',
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
