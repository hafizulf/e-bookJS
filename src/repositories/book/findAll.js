const repositoryFindAll = (database, tableName) => {
  return ({ limit, offset, search }) => {
    return database
      .select()
      .table(tableName)
      .where('title', 'like', `%${search}%`)
      .limit(limit)
      .offset(offset);
  };
};

module.exports = repositoryFindAll;
