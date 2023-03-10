const serviceUpdate = (Entity, repository, validator, buildError) => {
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

      if (Object.keys(data).length === 1) {
        return {
          status: false,
          message: 'Need a field to update',
        };
      }

      validator.update(data);

      const user = new Entity(data);
      const newUser = user.update();

      await repository.update(newUser);

      return {
        status: true,
        message: 'User has been updated',
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
