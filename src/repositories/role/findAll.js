const repositoryFindAll = (database, tableName) => {
  return () => {
    return database.select().table(tableName);
  };
};

module.exports = repositoryFindAll;
