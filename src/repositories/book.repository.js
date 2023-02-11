const createBookRepository = (database) => {
  const tableName = 'books';

  const findAll = () => {
    return database.select().table(tableName);
  };

  const save = (book) => {
    return database.insert(book).table(tableName);
  };

  return {
    findAll,
    save,
  };
};

module.exports = createBookRepository;
