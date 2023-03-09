const serviceDeleteOne = (repository) => {
  return async (role_id) => {
    const user = await repository.findOne({ name: 'role_id', value: role_id });

    if (!user) {
      return {
        status: false,
        message: 'Role Not Found',
      };
    } else {
      await repository.deleteOne(role_id);

      return {
        status: true,
        message: 'Role has been deleted',
      };
    }
  };
};
module.exports = serviceDeleteOne;
