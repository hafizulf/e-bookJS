const serviceUpdate = (Entity, repository, validator, buildError) => {
  return async (data) => {
    try {
      const { role_id } = data;
      const roleData = await repository.findOne({
        name: 'role_id',
        value: role_id,
      });

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

      if (data.role) {
        const isExist = await repository.findOne({
          name: 'role',
          value: data.role,
        });

        if (isExist && isExist.role_id !== role_id) {
          return {
            status: false,
            errors: {
              role: 'Role already exist',
            },
          };
        }
      }

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
