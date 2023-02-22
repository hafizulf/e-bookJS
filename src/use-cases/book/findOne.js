const serviceFindOne = (repository) => {
  return async (field) => {
    const book = await repository.findOne(field);

    const response = {};

    if (!book) {
      response.message = 'Book Not Found';
    } else {
      response.data = book;
    }

    return response;
  };
};

module.exports = serviceFindOne;
