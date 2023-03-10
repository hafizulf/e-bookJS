const repositoryFindOne = (database, tableName) => {
  return ({ name, value }) => {
    return database.select().table(tableName).where(name, value).first();
  };
};

module.exports = repositoryFindOne;
