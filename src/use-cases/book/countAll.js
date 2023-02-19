const serviceCountAll = (repository) => {
  return () => {
    return repository.countAll();
  };
};

module.exports = serviceCountAll;
