const serviceCountAll = (repository) => {
  return async () => {
    const { totalRow } = await repository.countAll();
    return totalRow;
  };
};

module.exports = serviceCountAll;
