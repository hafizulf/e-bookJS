const repositorySave = (database, tableName) => {
  return (book) => {
    return database.insert(book).table(tableName);
  };
};

module.exports = repositorySave;
