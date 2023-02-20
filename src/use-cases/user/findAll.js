const serviceFindAll = (repository) => {
  return (params) => {
    return repository.findAll(params);
  };
};

module.exports = serviceFindAll;
