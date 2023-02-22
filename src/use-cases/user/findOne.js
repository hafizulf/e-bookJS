const serviceFindOne = (repository) => {
  return async (field) => {
    const user = await repository.findOne(field);
    const response = {};

    if (!user) {
      response.message = 'User Not Found';
    } else {
      response.data = user;
    }

    return response;
  };
};

module.exports = serviceFindOne;
