const changePassword = (database, tableName) => {
  return (data) => {
    return database(tableName)
      .where('user_id', data.user_id)
      .update({ password: data.password });
  };
};

module.exports = changePassword;
