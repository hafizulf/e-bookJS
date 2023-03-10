const serviceUpdate = (Entity, repository, validator, buildError) => {
  return async (data) => {
    try {
      const { role_id } = data;
      const roleData = await repository.findOne(role_id);

      if (!roleData) {
        return {
          status: false,
          message: 'Role Not Found',
        };
      }

      if (Object.keys(data).length === 1) {
        return {
          status: false,
          message: 'Need a field to update',
        };
      }

      validator.update(data);

      const role = new Entity(data);
      const newRole = role.update();

      await repository.update(newRole);

      return {
        status: true,
        message: 'Role has been updated',
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
