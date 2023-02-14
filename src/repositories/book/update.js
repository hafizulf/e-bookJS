const repositoryUpdate = (database, tableName) => {
  return (book) => {
    return database
      .update(book)
      .table(tableName)
      .where('book_id', book.book_id);
  };
};

module.exports = repositoryUpdate;
