const serviceUpdate = (bookEntity, repository, validator, buildError) => {
  return async (data) => {
    try {
      if (data.title && typeof data.title === 'string') {
        data['slug'] = data.title.replace(/\s+/g, '-').toLowerCase();
      }

      validator.update(data);

      // const book = bookEntity(data);
      // await repository.update(book);

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

module.exports = serviceUpdate;
