const serviceFindOne = (repository) => {
  return async (role_id) => {
    const role = await repository.findOne({ name: 'role_id', value: role_id });

    const response = {};

    if (!role) {
      response.message = 'Role Not Found';
    } else {
      response.data = role;
    }

    return response;
  };
};

module.exports = serviceFindOne;
