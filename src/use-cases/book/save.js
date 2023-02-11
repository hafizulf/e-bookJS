const serviceSave = (BookEntity, bookValidator, buildError, repository) => {
  return async (data) => {
    try {
      // validate req.body input
      bookValidator.save(data);

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
