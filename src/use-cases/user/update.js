const serviceUpdate = (Entity, repository, validator, buildError) => {
  return async (data) => {
    try {
      validator.update(data);

      const user = new Entity(data);
      const newUser = user.update(data);

      await repository.update(newUser);

      return {
        status: true,
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

module.exports = serviceUpdate;
