const serviceSave = (BookEntity, bookSchemaRules, buildError, repository) => {
  return async (data) => {
    try {
      // validate req.body input
      bookSchemaRules.validateSync(data, {
        abortEarly: false,
        stripUnknown: true,
      });

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
