const serviceSave = (
  Entity,
  userRepository,
  roleRepository,
  userAccessRepository,
  validator,
  buildError
) => {
  return async (data) => {
    try {
      validator.save(data);

      const user = await userRepository.findOne({
        name: 'user_id',
        value: data.user_id,
      });
      const role = await roleRepository.findOne(data.role_id);

      if (!user || !role)
        return {
          status: false,
          errors: {
            message: 'User/Role Not Found',
          },
        };

      const isExist = await userAccessRepository.findUserAccess(
        data.user_id,
        data.role_id
      );
      if (isExist) {
        return {
          status: false,
          errors: {
            message: 'User access has already exist',
          },
        };
      }

      const userAccess = new Entity(data);
      const newUserAccess = userAccess.save();

      await userAccessRepository.save(newUserAccess);

      return {
        status: true,
        message: 'New user access has been created',
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
