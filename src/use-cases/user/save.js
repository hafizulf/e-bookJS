const saveService = (Entity, repository, validator, hasher, buildError) => {
  return async (data) => {
    try {
      validator.save(data);

      const isExist = await repository.findOne({
        name: 'email',
        value: data.email,
      });
      if (isExist) {
        return {
          status: false,
          errors: {
            email: 'Email is registered, please use another email',
          },
        };
      }

      const hashedPassword = hasher.hash(data.password);
      data.password = hashedPassword;

      const user = new Entity(data);
      const newUser = user.save();

      await repository.save(newUser);

      return {
        status: true,
        message: 'User has been created',
      };
    } catch (err) {
      const errors = buildError(err.inner);
      return {
        status: false,
        errors: errors,
      };
    }
  };
};

module.exports = saveService;
