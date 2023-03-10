class UserAccess {
  constructor({ user_access_id, user_id, role_id }) {
    this.user_access_id = user_access_id;
    this.user_id = user_id;
    this.role_id = role_id;
  }

  save() {
    return {
      user_id: this.user_id,
      role_id: this.role_id,
    };
  }
}

module.exports = UserAccess;
