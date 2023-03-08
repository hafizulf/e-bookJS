const { v4: uuidv4 } = require('uuid');

exports.seed = async function (knex) {
  await knex('roles').del();

  await knex('roles').insert([
    { role_id: uuidv4(), role: 'admin', desc: 'Admin' },
    { role_id: uuidv4(), role: 'user', desc: 'User General' },
  ]);
};
