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

  update() {
    const role = {};

    if (this.role_id) role.role_id = this.role_id;
    if (this.role) role.role = this.role;
    if (this.desc) role.desc = this.desc;

    return role;
  }
}

module.exports = Role;
