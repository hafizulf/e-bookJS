const repositoryFindAll = (database, tableName) => {
  return () => {
    return database(tableName).count('book_id as totalRow').first();
  };
};

module.exports = repositoryFindAll;
