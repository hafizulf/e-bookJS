const repositoryFindOne = (database, tableName) => {
  return (user_access_id) => {
    return database
      .select('user_access_id')
      .table(tableName)
      .where('user_access_id', user_access_id)
      .first();
  };
};

module.exports = repositoryFindOne;
