class User {
  constructor({ user_id, name, username, email, password, is_active }) {
    this.user_id = user_id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.is_active = is_active;
  }

  save() {
    return {
      user_id: this.user_id,
      name: this.name || null,
      username: this.username,
      email: this.email,
      password: this.password,
      is_active: this.is_active || 1,
    };
  }
}

module.exports = User;
