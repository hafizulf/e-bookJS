const repositoryDeleteOne = (database, tableName) => {
  return (user_access_id) => {
    return database
      .del()
      .where('user_access_id', user_access_id)
      .table(tableName);
  };
};

module.exports = repositoryDeleteOne;
