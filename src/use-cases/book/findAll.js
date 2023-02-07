const serviceFindAll = (repository) => {
  return () => {
    return repository
    .findAll();
  };
};

module.exports = serviceFindAll;
