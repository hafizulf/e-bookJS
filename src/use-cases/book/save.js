const serviceSave = (bookEntity, repository, validator, buildError) => {
  return async (data) => {
    try {
      if (data.title) {
        data['slug'] = data.title.replace(/\s+/g, '-').toLowerCase();
      }

      validator.save(data);

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
