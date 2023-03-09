const serviceFindOne = (repository) => {
  return async (field) => {
    const role = await repository.findOne(field);

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
