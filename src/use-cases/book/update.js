const serviceUpdate = (
  Entity,
  repository,
  validator,
  buildError,
  fileRemover
) => {
  return async (data, oldFile) => {
    try {
      if (data.title) {
        data['slug'] = data.title.replace(/\s+/g, '-').toLowerCase();
      }

      validator.update(data);

      const book = new Entity(data);
      const newBook = book.update(data);
      if (newBook.file) {
        newBook['file'] = newBook.file.filename;
      }

      const updatedBook = await repository.update(newBook);

      // checking if update bringing new file
      // delete old file from dir
      if (newBook.file && updatedBook === 1) {
        fileRemover(oldFile);
      }

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
