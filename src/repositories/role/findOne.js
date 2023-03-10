const repositoryFindOne = (database, tableName) => {
  return (role_id) => {
    return database.select().table(tableName).where('role_id', role_id).first();
  };
};

module.exports = repositoryFindOne;
