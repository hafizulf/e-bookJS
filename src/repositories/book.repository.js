const createBookRepository = database => {
  const tableName = 'books';

  const findAll = () => {
    return database.select().table(tableName);
  };

  return {
    findAll
  };
};

module.exports = createBookRepository;
