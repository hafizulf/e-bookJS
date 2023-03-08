const repositoryGetUserAccess = (database, tableName) => {
  return (user_id) => {
    return database(tableName)
      .select('r.role')
      .join('users AS u', 'u.user_id', '=', 'users_access.user_id')
      .join('roles AS r', 'r.role_id', '=', 'users_access.role_id')
      .where('u.user_id', user_id)
      .andWhere('u.is_active', '1');
  };
};

module.exports = repositoryGetUserAccess;
