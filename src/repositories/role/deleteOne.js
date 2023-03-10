const repositoryDeleteOne = (database, tableName) => {
  return (role_id) => {
    return database.del().table(tableName).where('role_id', role_id);
  };
};

module.exports = repositoryDeleteOne;
