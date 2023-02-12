const serviceFindOne = (repository) => {
  return (slug) => {
    return repository.findOne(slug);
  };
};

module.exports = serviceFindOne;
