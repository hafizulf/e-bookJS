const serviceSave = (Entity, repository, validator, buildError) => {
  return async (data) => {
    try {
      validator.save(data);

      const isExist = await repository.findOne({
        name: 'role',
        value: data.role,
      });
      if (isExist) {
        return {
          status: false,
          errors: {
            role: 'Role already exist',
          },
        };
      }

      const role = new Entity(data);
      const newRole = role.save();
      await repository.save(newRole);

      return {
        status: true,
        message: 'Role has been created',
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

module.exports = serviceSave;
