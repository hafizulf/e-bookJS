const saveService = (Entity, repository, validator, buildError) => {
  return async (data) => {
    try {
      validator.save(data);

      const user = new Entity(data);
      const newUser = user.save(user);

      await repository.save(newUser);

      return {
        status: true,
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
