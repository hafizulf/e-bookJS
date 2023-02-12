const repositoryFindOne = (database, tableName) => {
  return (slug) => {
    return database.select().table(tableName).where('slug', slug);
  };
};

module.exports = repositoryFindOne;
