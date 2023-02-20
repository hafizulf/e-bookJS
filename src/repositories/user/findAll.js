const repositoryFindAll = (database, tableName) => {
  return ({ limit, offset, search }) => {
    return database
      .select()
      .table(tableName)
      .where('name', 'like', `%${search}%`)
      .orWhere('username', 'like', `%${search}%`)
      .orWhere('email', 'like', `%${search}%`)
      .limit(limit)
      .offset(offset);
  };
};

module.exports = repositoryFindAll;
