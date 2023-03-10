const repositoryCountAll = (database, tableName) => {
  return () => {
    return database(tableName).count('user_id as totalRow').first();
  };
};

module.exports = repositoryCountAll;
