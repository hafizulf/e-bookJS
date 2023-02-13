const serviceFindOne = (repository) => {
  return (field) => {
    return repository.findOne(field);
  };
};

module.exports = serviceFindOne;
