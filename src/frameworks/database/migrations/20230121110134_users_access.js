const tableName = 'users_access';

exports.up = async (knex) => {
  if (await knex.schema.hasTable(tableName)) {
    console.log('table already exist');
    return;
  }

  return knex.schema.createTable(tableName, (table) => {
    table.uuid('user_access_id').primary().defaultTo(knex.raw('(UUID())'));
    table
      .uuid('user_id')
      .primary()
      .defaultTo(knex.raw('(UUID())'))
      .references('users.user_id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .uuid('role_id')
      .primary()
      .defaultTo(knex.raw('(UUID())'))
      .references('roles.role_id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = async (knex) => {
  return knex.schema.dropTableIfExists(tableName);
};
