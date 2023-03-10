const serviceUpdate = (
  Entity,
  repository,
  validator,
  buildError,
  fileRemover
) => {
  return async (data) => {
    try {
      const bookData = await repository.findOne({
        name: 'book_id',
        value: data.book_id,
      });
      if (!bookData) {
        return {
          status: false,
          message: 'Book Not Found',
        };
      }

      if (Object.keys(data).length === 1) {
        return {
          status: false,
          message: 'Need a field to update',
        };
      }

      validator.update(data);

      if (data.title) {
        data.slug = data.title.replace(/\s+/g, '-').toLowerCase();

        const isExist = await repository.findOne({
          name: 'title',
          value: data.title,
        });

        if (isExist && isExist.book_id !== data.book_id) {
          return {
            status: false,
            errors: {
              title: 'Title already exist',
            },
          };
        }
      }

      const book = new Entity(data);
      const newBook = book.update();
      if (newBook.file) {
        newBook.file = newBook.file.filename;
      }

      const updatedBook = await repository.update(newBook);

      // checking if update bringing new file
      // delete old file from dir
      if (newBook.file && updatedBook === 1) {
        fileRemover(bookData.file);
      }

      return {
        status: true,
        message: 'Book has been updated',
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
