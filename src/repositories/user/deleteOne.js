const repositoryDeleteOne = (database, tableName) => {
  return (user_id) => {
    return database.del().table(tableName).where('user_id', user_id).del();
  };
};

module.exports = repositoryDeleteOne;
