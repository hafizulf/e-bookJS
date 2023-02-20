const repositoryUpdate = (database, tableName) => {
  return (user) => {
    return database
      .update(user)
      .table(tableName)
      .where('user_id', user.user_id);
  };
};

module.exports = repositoryUpdate;
