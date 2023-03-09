const repositoryUpdate = (database, tableName) => {
  return (role) => {
    return database
      .update(role)
      .table(tableName)
      .where('role_id', role.role_id);
  };
};

module.exports = repositoryUpdate;
