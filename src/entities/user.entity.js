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
      name: this.name || null,
      username: this.username,
      email: this.email,
      password: this.password,
    };
  }

  update(data) {
    const user = {};

    if (data.user_id) user.user_id = this.user_id;
    if (data.name) user.name = this.name;
    if (data.username) user.username = this.username;
    if (data.email) user.email = this.email;

    return user;
  }

  changePassword() {
    return {
      user_id: this.user_id,
      password: this.password,
    };
  }
}

module.exports = User;
