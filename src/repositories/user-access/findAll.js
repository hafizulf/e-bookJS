const repositoryFindAll = (database, tableName) => {
  return ({ limit, offset, search }) => {
    return database
      .select('user_access_id', 'name', 'username', 'email', 'role')
      .join('users AS u', 'u.user_id', '=', 'users_access.user_id')
      .join('roles AS r', 'r.role_id', '=', 'users_access.role_id')
      .table(tableName)
      .where('u.name', 'like', `%${search}%`)
      .orWhere('u.username', 'like', `%${search}%`)
      .orWhere('u.email', 'like', `%${search}%`)
      .orWhere('r.role', 'like', `%${search}%`)
      .limit(limit)
      .offset(offset);
  };
};

module.exports = repositoryFindAll;
