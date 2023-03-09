class Role {
  constructor({ role_id, role, desc }) {
    this.role_id = role_id;
    this.role = role;
    this.desc = desc;
  }

  save() {
    return {
      role: this.role,
      desc: this.desc || null,
    };
  }
}

module.exports = Role;
