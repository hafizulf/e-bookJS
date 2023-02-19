const repositoryFindAll = (database, tableName) => {
  return ({ limit, offset }) => {
    return database.select().table(tableName).limit(limit).offset(offset);
  };
};

module.exports = repositoryFindAll;
