const serviceSave = (repository, Book) => {
  return (data) => {
    let { title, author, city, publisher, year, type, desc, file } = data;

    // validate books input
    const errors = {};

    if (!title) errors.title = ['required'];
    if (!author) errors.author = ['required'];

    // assign default value
    if (!file) file = '';

    if (Object.keys(errors).length > 0) {
      return {
        errors,
      };
    } else {
      // saving
      const newBook = new Book({
        title,
        author,
        city,
        publisher,
        year,
        type,
        desc,
        file,
      });
      return repository.save(newBook);
    }
  };
};

module.exports = serviceSave;
