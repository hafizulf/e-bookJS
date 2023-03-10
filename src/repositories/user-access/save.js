const repositorySave = (database, tableName) => {
  return (user_access) => {
    return database.insert(user_access).into(tableName);
  };
};

module.exports = repositorySave;
