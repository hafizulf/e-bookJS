const tableName = 'users';

exports.up = async (knex) => {
  if (await knex.schema.hasTable(tableName)) {
    console.log('table already exist');
    return;
  }

  return knex.schema.createTable(tableName, (table) => {
    table.uuid('user_id').primary().defaultTo(knex.raw('(UUID())'));
    table.string('name', 50);
    table.string('username', 50).notNullable();
    table.string('email', 50).notNullable();
    table.string('password', 128).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.integer('is_active', 9).notNullable().defaultTo(1);
  });
};

exports.down = async (knex) => {
  return knex.schema.dropTableIfExists(tableName);
};
