const createBookRepository = (database) => {
  const tableName = 'books';

  const findAll = () => {
    return database.select().table(tableName);
  };

  const save = (newBook) => {
    return database.insert(newBook).table(tableName);
  };

  return {
    findAll,
    save,
  };
};

module.exports = createBookRepository;
