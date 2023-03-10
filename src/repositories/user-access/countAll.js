const repositoryCountAll = (database, tableName) => {
  return () => {
    return database(tableName).count('user_access_id as totalRow').first();
  };
};

module.exports = repositoryCountAll;
