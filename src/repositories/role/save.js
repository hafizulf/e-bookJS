const repositorySave = (database, tableName) => {
  return (role) => {
    return database.insert(role).table(tableName);
  };
};

module.exports = repositorySave;
