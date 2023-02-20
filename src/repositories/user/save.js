const repositorySave = (database, tableName) => {
  return (user) => {
    return database.insert(user).table(tableName);
  };
};

module.exports = repositorySave;
