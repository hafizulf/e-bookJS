const serviceFindAll = (repository) => {
  return async () => {
    const result = await repository.findAll();

    return {
      data: result,
    };
  };
};

module.exports = serviceFindAll;
