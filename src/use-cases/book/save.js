const serviceSave = (BookEntity, repository, validator, buildError) => {
  return async (data) => {
    try {
      // validate req.body input
      validator.save(data);

      // saving into database
      const book = new BookEntity(data);
      await repository.save(book);

      return {
        status: true,
      };
    } catch (err) {
      const errors = buildError(err.inner);
      return {
        status: false,
        errors,
      };
    }
  };
};

module.exports = serviceSave;
