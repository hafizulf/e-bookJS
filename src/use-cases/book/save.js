const serviceSave = (Entity, repository, validator, buildError) => {
  return async (data) => {
    try {
      validator.save(data);

      if (data.title) {
        data.slug = data.title.replace(/\s+/g, '-').toLowerCase();
      }

      const book = new Entity(data);
      const newBook = book.save();
      newBook.file = book.file.filename;

      await repository.save(newBook);

      return {
        status: true,
        message: 'Book has been created',
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
