const repositoryDeleteOne = (database, tableName) => {
  return (book_id) => {
    return database.del().table(tableName).where('book_id', book_id).del();
  };
};

module.exports = repositoryDeleteOne;
