const serviceSave = (bookEntity, repository, validator, buildError) => {
  return async (data) => {
    try {
      // validate req.body input
      validator.save(data);

      // assign a title slug
      if (data.title) {
        data['slug'] = data.title.replace(/\s+/g, '-').toLowerCase();
      }

      // saving into database
      const book = bookEntity(data);
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
